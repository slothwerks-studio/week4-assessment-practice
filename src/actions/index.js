export function firstNumberChange(event) {
    return {
        type: "FIRST_NUMBER_CHANGE",
        event
    };
}

export function secondNumberChange(event) {
    return {
        type: "SECOND_NUMBER_CHANGE",
        event
    };
}

export function executeOperation(operation) {
    return {
        type: "EXECUTE_OPERATION",
        operation
    };
}
