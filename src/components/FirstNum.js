import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firstNumberChange } from '../actions';

class FirstNum extends Component {
  render() {
    return (
      <div className="FirstNum">
      	<form>
      		<input type="text" className="numberInput" value={this.props.firstNumber} onChange={this.props.firstNumberChange.bind(this)} />
  		</form>
      </div>
    );
  }
}

// This will add the firstNumber prop to FirstNum. Redux will set them from the state.
function mapStateToProps(state) {
    return {
        firstNumber: state.firstNumber
    };
}

// This will add firstNumberChange prop to Board. Redux will set it from the action creator.
const mapActionsToProps = { firstNumberChange };

// Connect Redux to this component.
export default connect(mapStateToProps, mapActionsToProps)(FirstNum);