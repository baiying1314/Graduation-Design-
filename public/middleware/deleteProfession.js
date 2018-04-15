import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "DELETEPROFESSION"){
        request.delete("/profession")
            .end((err,res)=>{
                store.dispatch({type:"getAllProfessions"});
            })
    }
    else{
        next(action);
    }
}