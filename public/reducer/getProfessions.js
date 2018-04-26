export default (state = {professions:[],selectedProfession:"",selectedLevel:"",selectedDatas:[]}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});

    }
    else if(action.type === 'GETREQPOINT'){
        return Object.assign({},state,{selectedDatas:action.result});
    }
    else if(action.type === 'DELETEPROFESSION'){
        console.log(action.result);
        return action.result;
    }
    return state;

}