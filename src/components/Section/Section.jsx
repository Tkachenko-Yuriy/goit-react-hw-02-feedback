import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedBackTitle } from '../Section/Section.styled';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <FeedBackTitle>{this.props.title}</FeedBackTitle>
        {this.props.children}
      </div>
    );
  }
}