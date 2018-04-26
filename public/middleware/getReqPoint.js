import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "GETREQPOINT"){
        request.get(`/requirments?profession=${action.proLevel.professionVal}&level=${action.proLevel.levelVal}`)
            .end((err,res)=>{
                next({type:action.type,result:res.body})
            })
    }
    else{
        next(action);
    }
}