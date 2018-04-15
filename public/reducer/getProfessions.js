export default (state = [], action)=> {
    if (action.type === 'getAllProfessions') {
        return action.result;

    }
    else if(action.type === 'DELETEPROFESSION'){
        console.log(action.result);
        return action.result;
    }
    return state;

}