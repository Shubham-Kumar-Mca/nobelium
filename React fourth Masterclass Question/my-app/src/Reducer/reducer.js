
const reducer = (state, {type, payload}) =>{
    switch (type) {
        case "DATA":
            return {...state, data : payload}
        case "SINGLE_DATA":
            return {...state, singleUserData : payload}
        default:
            return state;
    }
}
export default reducer