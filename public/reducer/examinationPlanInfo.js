export default (state = {professions:[],points:[],addPlanResult:0}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});
    }
    else if(action.type === 'GETPROLEVELPTIONTS'){
        console.log(action.result);
        return Object.assign({},state,{points:action.result})
    }
    else if(action.type === 'ADNPLANIINFO'){
        return Object.assign({},state,{addPlanResult:action.result})
    }
    return state;

}