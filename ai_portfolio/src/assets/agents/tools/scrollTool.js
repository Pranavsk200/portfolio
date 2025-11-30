import { z } from "zod";
import { tool } from "@langchain/core/tools";

export const scrollTool = tool(
  async ({ target }) => {
    // This is the function logic
    console.log(`Agent is requesting scroll to: ${target}`);
    
    return {
      action: "scroll",
      target: target.toLowerCase()
    };
  },
  {
    name: "scrollPage",
    description: "Scroll the webpage to the specified section (projects, about, home, etc).",
    schema: z.object({
      target: z.string().describe("The section ID to scroll to."),
    }),
  }
);