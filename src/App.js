import React, { Component } from 'react';
import './App.css';
import myHoc from './myHoc/index';
import AppChild from './AppChild';
const NewAppChild = myHoc({}, ()=> {
})(AppChild);
class App extends Component {
  state = {
    count: 1,
  };

  reRender = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div className="App">
        <NewAppChild handleClick={this.reRender} count={this.state.count}/>
      </div>
    );
  }
}

export default App;
