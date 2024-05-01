export const withdraw=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}
export const deposit=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"deposit",
            payload:amount
        })
    }
}