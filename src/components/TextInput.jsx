import React, { useState } from "react";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

const TextInput = ({ getInput }) => {
  const [input, setInput] = useState("");
  const addItemHandle = () => {
    getInput(input);
    setInput("");
  };
  return (
    <MDBInputGroup className="mb-3">
      <input
        id="typeText"
        type="text"
        className="form-control"
        placeholder="new todo item"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addItemHandle() : null)}
        value={input}
      />
      <MDBBtn onClick={addItemHandle} disabled={input === "" ? true : false}>
        Add
      </MDBBtn>
    </MDBInputGroup>
  );
};

export default TextInput;
