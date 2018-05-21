import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "GETPROLEVELPTIONTS"){
        request.post(`/points`)
            .send(action.proLevel)
            .end((err,res)=>{
                next({type:action.type,result:res.body.info})
            })
    }
    else{
        next(action);
    }
}