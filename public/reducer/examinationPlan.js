export default (state = {professions:[],plans:[],planDetils:[],status:0}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});

    }
    else if(action.type === 'SELECTPLAN'){
        return Object.assign({},state,{plans:action.result},{status:1})
    }
    else if(action.type === 'SELECTDETILS'){
        return Object.assign({},state,{planDetils:action.result},{status:2})
    }
    return state;

}