import React, { useState } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "A line of text in a paragraph."
          }
        ]
      }
    ]
  }
});

export default function App() {
  const [state, setState] = useState({
    value: initialValue
  });

  const onChange = ({ value }) => {
    setState({ value });
  };

  return <Editor value={state.value} onChange={onChange} />;
}
