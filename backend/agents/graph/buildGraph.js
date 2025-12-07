// agent/graph/buildGraph.js
import { StateGraph } from "@langchain/langgraph";
import { scrollTool } from "../tools/scrollTool.js";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";


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

const StateSchema = z.object({
  input: z.string(),
  target: z.string().optional(),
});

export function buildGraph() {
  const graph = new StateGraph(StateSchema);

  graph.addNode("agent", async ({ input }) => {
    const t = input.toLowerCase();
    let target = "home";
    if (t.includes("project")) target = "projects";
    if (t.includes("skill")) target = "skills";
    if (t.includes("about")) target = "about";
    if (t.includes("contact")) target = "contact";
    return { target };
  });

  graph.addNode("scrollPage", async ({ target }) => {
    return await scrollTool.invoke({ target });
  });

  graph.addEdge("agent", "scrollPage");
  graph.setEntryPoint("agent");

  return graph.compile();
}
