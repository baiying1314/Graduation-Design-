export default (state = {allPlans: []}, action)=> {
    if (action.type === 'GETALLPLANS') {
        return Object.assign({}, state, {allPlans: action.result});

    }

    return state;

}