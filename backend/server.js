import express from "express";
import cors from "cors";
import { agentInvoke, initializeAgent } from "./agents/index.js";

const app  = express();
app.use(cors());
app.use(express.json());

initializeAgent();

app.post("/api/agent", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "message is required" });
      }
  
      const result = await agentInvoke(message);   // ✅ await here!
      console.log("this is the message received from agent:", result);
  
      return res.json({ reply: result });
    }
    catch (err) {
      console.log("something went wrong", err);
      return res.status(500).json({ error: "Agent failed", details: err.message });
    }
  });
  

const port = 5000;
app.listen(port, ()=>{
    console.log("Server is started");
})
