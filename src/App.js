import React from "react";
import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import Clock from "./Components/Clock";
import StateFunc from "./Components/UseState";
import PrintInput from "./Components/PrintInput";

function Input() {
  return <input type="text" placeholder="Enter your text"></input>;
}

function Submit() {
  return <button type="submit">Submit</button>;
}

function Form() {
  return (
    <div>
      <Clock title="Time" />
      <StateFunc />
      <PrintInput />
      <ParentComponent />
      <Input />
      <Input />
      <Submit />
    </div>
  );
}

export default Form;
