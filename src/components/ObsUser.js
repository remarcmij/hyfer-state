import React, { Component } from 'react';
import userStore from '../obs-stores/UserStore';

export default class ObsUser extends Component {

  state = {};

  componentDidMount = () => {
    this.subscription = userStore.subscribe(state => {
      this.setState(state);
    });
  };

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <h2>
        Hello, {this.state.name || 'world'}!
      </h2>
    )
  }
}
