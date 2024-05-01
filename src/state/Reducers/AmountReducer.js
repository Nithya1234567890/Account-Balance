const reducer=(state=0,action)=>{
    if(action.type==="withdraw"){
        if(state===0) return state;
        return state-action.payload;
    }
    else if(action.type==="deposit"){
        return state+action.payload;
    }
    return state;
}
export default reducer