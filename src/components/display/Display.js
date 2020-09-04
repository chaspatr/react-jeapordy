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
      <form onSubmit={props.handleSubmit}>
        <label>
          What is your answer?
          <input
            type="text"
            value={props.input}
            onChange={props.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Display;
