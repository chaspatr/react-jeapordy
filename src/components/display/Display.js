import React from "react";

function Display(props) {
  return (
    <div>
      <p>
        <strong>Category: {props.category}</strong>
      </p>
      <p>
        <strong>Points: {props.value}</strong>
      </p>
      <p>
        <strong>Question: {props.question}</strong>
      </p>
      <p>
        <strong>Score: {props.score}</strong>
      </p>
    </div>
  );
}

export default Display;
