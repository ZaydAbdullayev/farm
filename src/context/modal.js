export const reModal = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter((item) => item.id !== action.payload.id);
        case "CLEAR":
            return [];
        default:
            return state;
    }
}

export const acAddFav = (payload) => ({ type: "ADD", payload });
export const acRemoveFav = (payload) => ({ type: "REMOVE", payload });
export const acClearFav = () => ({ type: "CLEAR" });