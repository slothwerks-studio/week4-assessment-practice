const INITIAL_STATE = {
	firstNumber: 0,
    secondNumber: 0,
    result: 0
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
    	case "FIRST_NUMBER_CHANGE":
    		return firstNumberChange(state, action.event);
    	case "SECOND_NUMBER_CHANGE":
    		return secondNumberChange(state, action.event);
    	case "EXECUTE_OPERATION":
    		return executeOperation(state, action.operation);
        default: 
            return state; 
    } 
}

function firstNumberChange(state, event) {
	let firstNumber = event.target.value;

    return Object.assign({}, state, {
    	firstNumber: firstNumber
	});
}

function secondNumberChange(state, event) {
	let secondNumber = event.target.value;

    return Object.assign({}, state, {
    	secondNumber: secondNumber
	});
}

function executeOperation(state, operation) {
	let result;

	if (operation === "add") {
		result = Number(state.firstNumber) + Number(state.secondNumber);
	} else if (operation === "subtract") {
		result = Number(state.firstNumber) - Number(state.secondNumber);
	} else if (operation === "multiply") {
		result = Number(state.firstNumber) * Number(state.secondNumber);
	} else if (operation === "divide") {
		result = Number(state.firstNumber) / Number(state.secondNumber);
	} else {
		result = "Operation Undefined";
	}
	
// Check to see if result is NaN due to text being entered
	result = String(result);

	if (result === "NaN") {
		result = "Please enter two valid values for the desired operation.";
	}

    return Object.assign({}, state, {
        result: result
    });
} 
