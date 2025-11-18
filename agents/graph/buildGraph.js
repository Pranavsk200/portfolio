// agent/graph/buildGraph.js
import { StateGraph } from "@langchain/langgraph";
import { scrollTool } from "../tools/scrollTool.js";
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

// Map vague text → section IDs
function inferSection(text) {
  const t = text.toLowerCase();

  if (t.includes("project")) return "projects";
  if (t.includes("skill")) return "skills";
  if (t.includes("about")) return "about";
  if (t.includes("contact")) return "contact";

  return "home";
}

export function buildGraph() {
  const graph = new StateGraph();

  // Node: Interpret user query and call tool
  graph.addNode("agent", async ({ input, tools }) => {
    const target = inferSection(input);
    return tools.scrollPage({ target });
  });

  // Tool node
  graph.addNode("scrollPage", scrollTool);

  // Connect the nodes
  graph.addEdge("agent", "scrollPage");

  // Start and end
  graph.setEntryPoint("agent");

  return graph.compile();
}
