import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <section>
        <h2>Statistics</h2>
        {total > 0 ? (
          <ul>
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
            <li>
              <p>Total: {total}</p>
            </li>
            <li>
              <p>Positive percentage: {positivePercentage}% </p>
            </li>
          </ul>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </section>
    );
  }
}
