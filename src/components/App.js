import React, { Component } from 'react';
import { connect } from 'react-redux';
import FirstNum from './FirstNum';
import SecondNum from './SecondNum';
import Result from './Result';
import { executeOperation } from '../actions';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<p>Please enter two numbers:</p>
		<FirstNum />
		<SecondNum />
		<p>Please select an operation:</p>
		<button className="operationButton" onClick={() => this.props.executeOperation("add")}>Add</button>
		<button className="operationButton" onClick={() => this.props.executeOperation("subtract")}>Subtract</button>
		<button className="operationButton" onClick={() => this.props.executeOperation("multiply")}>Multiply</button>
		<button className="operationButton" onClick={() => this.props.executeOperation("divide")}>Divide</button>
      	<p>Here is the result of your operation:</p>
		<Result result={this.props.result} />
      </div>
    );
  }
}

// This will add the result prop to App. Redux will set them from the state.
function mapStateToProps(state) {
    return {
        result: state.result,
    };
}

// This will add executeOperation prop to Board. Redux will set it from the action creator.
const mapActionsToProps = { executeOperation };

// Connect Redux to this component.
export default connect(mapStateToProps, mapActionsToProps)(App);
