// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Section from 'components/Section';
import FeedBackOptions from 'components/FeedBackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { LeaveFeedback } from './Feedback.styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    const arrayTotal = Object.values(this.state);
    return arrayTotal.reduce((value, count) => value + count);
  };
  countPositiveFeedbackPercentage() {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <LeaveFeedback>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </LeaveFeedback>
    );
  }
}
