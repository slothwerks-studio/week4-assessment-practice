// There are four possible operations, but we can likely create one action for them all.

export function executeOperation(operation) {
    return {
        type: "EXECUTE_OPERATION",
        operation
    };
}