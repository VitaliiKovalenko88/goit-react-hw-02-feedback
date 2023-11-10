import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = ({ target: { textContent } }) => {
    this.setState(prevState => {
      console.log(prevState[textContent]);
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <div>
            {options.map(option => (
              <button key={option} onClick={this.countFeedback}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </section>
    );
  }
}
