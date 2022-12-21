import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from '../FeedBackOptions/FeedBackOptions.styled';

export default class FeedBackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {Object.keys(options).map(key => (
          <li key = {key}>
            <Button type="button" className={key} onClick={() => onLeaveFeedback(key)}>
              {this.capitalizeFirstLetter(key)}
            </Button>
          </li>
        ))}
      </ButtonList>
    );
  }
}
