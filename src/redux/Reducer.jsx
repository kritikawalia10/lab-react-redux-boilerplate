const initial = {
    like:0
}

const Reducer = (state=initial,action) => {
    switch(action.type){
        case "DECREMENT_LIKE":
            return {...state,like:state.like-1};
        case "INCREMENT_LIKE":
            return {...state,like:state.like+1};
        default:
                return state;
    }
}

export default Reducer;