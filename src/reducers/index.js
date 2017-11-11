const INITIAL_STATE = {
	firstNumber: 1,
    secondNumber: 2,
    result: 0
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
    	case "EXECUTE_OPERATION":
    		return executeOperation(state, action.operation);
        default: 
            return state; 
    } 
}

function executeOperation(state, operation) {
	let result;
	if (operation === "add") {
		result = state.firstNumber + state.secondNumber;
	} else if (operation === "subtract") {
		result = state.firstNumber - state.secondNumber;
	} else if (operation === "multiply") {
		result = state.firstNumber * state.secondNumber;
	} else if (operation === "divide") {
		result = state.firstNumber / state.secondNumber;
	} else {
		result = "Error: Operation not selected?";
	}

    return Object.assign({}, state, {
        result: result
    });
} 
