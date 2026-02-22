import { useState } from "react";
// import "./App.css";

function Ai_input_box() {
  const [open, setOpen] = useState(false);

  return (
    <div id="ai_input_container" className={open ? "open" : ""}>
      
      <div
        id="circle_elem"
        onClick={() => setOpen(!open)}
      >
      </div>

      <input
        type="text"
        placeholder="Ask me anything..."
        className="ai_input"
        onBlur={() => setOpen(false)}
      />
    </div>
  );
}

export default Ai_input_box;
