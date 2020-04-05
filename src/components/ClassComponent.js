import React from 'react';

export default class ClassComponent extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>just a header {this.state.count}</h1>
        <button onClick={this.incrementCount}>click click</button>
      </div>
    );
  }
}
