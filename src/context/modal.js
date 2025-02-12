export const reModal = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter((item) => item !== action.payload);
        default:
            return state;
    }
}

export const acAdd = (payload) => ({ type: "ADD", payload });
export const acRemove = (payload) => ({ type: "REMOVE", payload });