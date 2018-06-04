import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
export default class MobxUser extends Component {
  render() {
    return (
      <h2>
        Hello, {this.props.userStore.name || 'world'}!
      </h2>
    )
  }
}
