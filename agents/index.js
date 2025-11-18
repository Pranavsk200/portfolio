// agent/index.js
import { buildGraph } from "./graph/buildGraph.js";

let agent = null;

export function initializeAgent() {
  if (!agent) {
    agent = buildGraph();
  }
  return agent;
}

// Call this in frontend: agentInvoke("scroll to projects")
export async function agentInvoke(message) {
  if (!agent) initializeAgent();
  return await agent.invoke({ input: message });
}
