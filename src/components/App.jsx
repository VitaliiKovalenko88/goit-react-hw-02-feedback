import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.jsx';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = ({ target: { textContent } }) => {
    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return good === 0
      ? good
      : Math.round((good / this.countTotalFeedback()) * 100);
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
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePersentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}
