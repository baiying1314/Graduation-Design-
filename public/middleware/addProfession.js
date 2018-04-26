import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "ADDPROFESSION"){
        request.post("/profession")
            .send(action.professionName)
            .end((err,res)=>{
                if(res.status === 200){
                    store.dispatch({type:'GETPROFESSIONS'})
                }
            })
    }
    else{
        next(action);
    }
}