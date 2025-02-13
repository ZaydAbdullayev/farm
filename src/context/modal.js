export const reModal = (state = {}, action) => {
    switch (action.type) {
        case "ADD":
            return Object.keys(state).reduce(
                (acc, key) => ({ ...acc, [key]: false }),
                { [action.payload]: true }
            );
        case "REMOVE":
            return { ...state, [action.payload]: false };
        default:
            return state;
    }
};

export const acAdd = (payload) => ({ type: "ADD", payload });
export const acRemove = (payload) => ({ type: "REMOVE", payload });
