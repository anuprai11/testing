/**
 * Created by anuprai on 25/07/17.
 */
import React, { Component } from 'react';

class AppChild extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return <div>
      <div onClick={this.props.handleClick}>{`Anup is awesome ${this.props.count}`}</div>
      <div>{JSON.stringify(this.props)}</div>
    </div>;
  }
}

export default AppChild;
