export default (state = [], action)=> {
    if (action.type === 'getAllProfessions') {
        return action.result;

    }
    return state;

}