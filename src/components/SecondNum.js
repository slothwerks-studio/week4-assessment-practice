import React, { Component } from 'react';
import { connect } from 'react-redux';
import { secondNumberChange } from '../actions';

class SecondNum extends Component {
  render() {
    return (
      <div className="SecondNum">
      	<form>
      		<input type="text" className="numberInput" value={this.props.secondNumber} onChange={this.props.secondNumberChange.bind(this)} />
  		</form>
      </div>
    );
  }
}

// This will add the secondNumber prop to SecondNum. Redux will set them from the state.
function mapStateToProps(state) {
    return {
        secondNumber: state.secondNumber
    };
}

// This will add secondNumberChange prop to Board. Redux will set it from the action creator.
const mapActionsToProps = { secondNumberChange };

// Connect Redux to this component.
export default connect(mapStateToProps, mapActionsToProps)(SecondNum);