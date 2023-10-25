import React from "react";

export function AddOnComponent(props) {
  function handleClick(e) {
    const div = e.target.closest(".add-on");
    if (Array.from(div.classList).includes("selected")) {
      div.classList.remove("selected");
    } else {
      div.classList.add("selected");
    }
  }

  return (
    <div
      className="add-on flex-row"
      id={props.addOnName.replace(" ", "-")}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <div className="add-on-specifics align-left">
        <p className="bold dark-blue">{props.addOnName}</p>
        <p className="regular grey">{props.addOnDescription}</p>
      </div>
      <p className="regular blue align-right">{props.pricing}</p>
    </div>
  );
}
