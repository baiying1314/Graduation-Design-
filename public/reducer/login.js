export default (state = {isSuccess:0}, action)=> {
    if (action.type === 'LOGIN') {
        return Object.assign({},state,{isSuccess:action.result.isSuccess});
    }
    return state;

}