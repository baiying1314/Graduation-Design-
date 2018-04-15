import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "getAllProfessions"){
        request.get("/professions")
            .end((err,res)=>{
                next({type:action.type,result:res.body})
            })
    }
    else{
        next(action);
    }
}