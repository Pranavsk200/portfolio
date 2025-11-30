// app.js
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
