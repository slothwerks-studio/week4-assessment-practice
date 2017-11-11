import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="Result">
      	{this.props.result}
      </div>
    );
  }
}

export default Result;