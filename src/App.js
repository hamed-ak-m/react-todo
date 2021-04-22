/* eslint-disable react/style-prop-object */
/* eslint-disable no-unreachable */
import React from "react";
import "./style.css";
const App = () => {
  return (
    <div className={"container"}>
      <input />
      <button>add</button>
      <div className={"list"}>
        <div className={"task"}>
          <p className={"taskTitle"}>do a work</p>
        </div>
        <div className={"task"}>
          <p className={"taskTitle"}>do a task</p>
        </div>
        <div className={"task"}>
          <p className={"taskTitle"}>do a work</p>
        </div>
        <div className={"task"}>
          <p className={"taskTitle"}>do a task</p>
        </div>
        <div className={"task"}>
          <p className={"taskTitle"}>do a work</p>
        </div>
        <div className={"task"}>
          <p className={"taskTitle"}>do a task</p>
        </div>
      </div>
    </div>
  );
};

export default App;
