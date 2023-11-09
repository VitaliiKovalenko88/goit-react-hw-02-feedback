import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    const { textContent } = e.target;
    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <li>
              <button type="button" onClick={this.countFeedback}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.countFeedback}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.countFeedback}>
                Bad
              </button>
            </li>
          </ul>
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
