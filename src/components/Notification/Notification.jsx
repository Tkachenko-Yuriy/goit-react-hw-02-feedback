import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message} from '../Notification/Notification.styled';


export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <Message>{this.props.message}</Message>;
  }
}