// src/agent/app.js
import { agentInvoke } from "../agents/index.js";

window.sendMessage = async function () {
  // const input = document.getElementById("userInput").value;
  console.log("ai_section")
  const input = "Go to your projects section";
  if (!input) return;

  // Send to AI agent
  const result = await agentInvoke(input);

  // If agent triggered scroll tool
  if (result.action === "scroll") {
    const target = result.target;
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log("Scrolling to:", target);
    } else {
      console.log("Section not found:", target);
    }
  }
};


// 1. Export the function directly
// 2. Accept 'input' as an argument so it isn't hardcoded
export const sendMessage = async (input) => {
  console.log("ai_section");
  
  if (!input) return;

  try {
    // Send to AI agent
    const result = await agentInvoke(input);

    // If agent triggered scroll tool
    if (result && result.action === "scroll") {
      const target = result.target;
      const section = document.getElementById(target);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolling to:", target);
      } else {
        console.warn("Section not found:", target);
      }
    }
    return result; // Return result in case the component needs it
  } catch (error) {
    console.error("Error sending message:", error);
  }
};