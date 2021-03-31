import React from "react";
import "./forms.css";
import Result from "../components/result";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: [e.target.value] });
  };
  increment = (e) => {
    e.preventDefault();
    this.setState({ number: parseInt(this.state.number) + 1 });
  };
  decrement = (e) => {
    e.preventDefault();
    this.setState({ number: parseInt(this.state.number) - 1 });
  };
  render() {
    console.log(this.state.number);
    return (
      <div id="forms">
        <form>
          <input
            type="text"
            name="number"
            placeholder="Enter Number"
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </form>
        <Result count={this.state.number} />
      </div>
    );
  }
}

export default Forms;
