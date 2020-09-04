import React, { Component } from "react";
//import jeopardy service
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";
class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      score: 0,
      value: "",
    };
  }
  //get a new random generated question from API
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get the question
  componentDidMount() {
    this.getNewQuestion();
  }
  //handle user input
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  //Check if answer is correct and get new question
  handleSubmit = (event) => {
    if (
      this.state.value.toLowerCase() === this.state.data.answer.toLowerCase()
    ) {
      this.setState({ score: this.state.score + this.state.data.value });
    } else {
      this.setState({ score: this.state.score - this.state.data.value });
    }
    this.setState({ value: "" });
    this.getNewQuestion();

    event.preventDefault();
  };

  //display the result
  render() {
    console.log(this.state.data.answer);
    return (
      <div>
        <Display
          category={this.state.data.category.title}
          value={this.state.data.value}
          question={this.state.data.question}
          score={this.state.score}
          input={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
