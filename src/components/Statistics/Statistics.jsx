import React, { Component } from 'react';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePersentage}%</li>
    </ul>
  </div>
);
export default Statistics;
