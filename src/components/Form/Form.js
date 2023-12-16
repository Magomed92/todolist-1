import React, { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [value, setValue] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        props.putTodo(value);
        setValue("");
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        type="text"
        placeholder="Введите текст...."
      />
    </form>
  );
};

export default Form;
