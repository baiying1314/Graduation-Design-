export default (state = {professions:[],selectedDatas:[],addReqResult:0,addProfessionResult:0,addPointResult:0,changePointResult:0}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});

    }
    else if(action.type === 'GETREQPOINT'){
        return Object.assign({},state,{selectedDatas:action.result});
    }
    else if(action.type === 'ADDREQ'){
        return Object.assign({},state,{addReqResult:action.result})
    }
    else if(action.type === 'ADDPRO'){
        return Object.assign({},state,{addProfessionResult:action.result})
    }
    else if(action.type === 'ADDPOINT'){
        return Object.assign({},state,{addPointResult:action.result})
    }
    else if(action.type === 'CHANGEPOINT'){
        return Object.assign({},state,{changePointResult:action.result})
    }
    return state;

}