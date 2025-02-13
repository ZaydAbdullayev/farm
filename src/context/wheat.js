export const reWheat = (state = false, action) => {
    switch (action.type) {
        case "ON":
            return true;
        case "OFF":
            return false;
        default:
            return state;
    }
}


export const acOn = () => ({ type: "ON" });
export const acOff = () => ({ type: "OFF" });
