export default (state = {professions:[],plans:[],questions:[],usefulPoints:[],questionsInfo:[],status:0}, action)=> {
    if (action.type === 'GETPROFESSIONS') {
        return Object.assign({},state,{professions:action.result});

    }
    else if(action.type === 'SELECTPLAN'){
        return Object.assign({},state,{plans:action.result},{status:1})
    }
    else if(action.type === 'SELECTDETILS1'){
        return Object.assign({},state,{questions:action.selectDetilsInfo.questions},{status:action.selectDetilsInfo.status})
    }
    else if(action.type === 'SELECTDETILS2'){
        return Object.assign({},state,{usefulPoints:action.selectDetilsInfo.usefulPoints},{status:action.selectDetilsInfo.status})
    }
    else if(action.type === 'SELECTDETILS3'){
        return Object.assign({},state,{questionsInfo:action.selectDetilsInfo.questionsInfo},{status:action.selectDetilsInfo.status})
    }
    return state;

}