export default (state = {professions:[],selectedDatas:[]}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});

    }
    else if(action.type === 'GETREQPOINT'){
        return Object.assign({},state,{selectedDatas:action.result});
    }
    return state;

}