import JoditEditor from "jodit-react";
import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const Publish = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    height: 600, 
    width: "100%", 
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-10 ">
        <div className="w-9/12">
        <input type="text" placeholder="Title" />
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
    </div>
  );
};

export default Publish;
