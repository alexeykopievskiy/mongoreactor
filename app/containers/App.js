// @flow
import React, { Component, PropTypes } from 'react';

import AuthContainer from './Connect/authContainer'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>

        <AuthContainer />
      </div>
    );
  }
}
