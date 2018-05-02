import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "SELECTDETILS"){
        request.get(`/planDetils?id=${action.selectDetilsInfo.id}`)
            .end((err,res)=>{
                next({type:action.type,result:res.body})
            })
    }
    else{
        next(action);
    }
}