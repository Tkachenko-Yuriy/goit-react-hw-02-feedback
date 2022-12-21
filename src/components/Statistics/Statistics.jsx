import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export default class Statistics extends Component {
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
      <StatisticsList>
        <li>Good: {good}</li>
        <li> Neutral: {neutral}</li>
        <li> Bad: {bad}</li>
        <li> Total: {total}</li>
        <li>
          Positive feedback: {positivePercentage ? positivePercentage : 0} %
        </li>
      </StatisticsList>
    );
  }
}
