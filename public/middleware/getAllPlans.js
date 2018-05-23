import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "GETALLPLANS") {
        request.get(`/allPlans`)
            .end((err, res)=> {
                next({type:action.type,result:res.body.info})
            })
    }
    else {
        next(action);
    }
}