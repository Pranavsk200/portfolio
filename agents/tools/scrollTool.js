// agent/tools/scrollTool.js
import { ToolNode } from "@langchain/langgraph";

export const scrollTool = new ToolNode({
  name: "scrollPage",
  description: "Scroll the webpage to the specified section.",
  func: async ({ target }) => {
    return {
      action: "scroll",
      target: target.toLowerCase()
    };
  },
  schema: {
    type: "object",
    properties: {
      target: { type: "string" }
    },
    required: ["target"]
  }
});
