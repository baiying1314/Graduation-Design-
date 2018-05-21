import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "ADNPLANIINFO") {
        request.post("/plan")
            .send(action.addPlanInfo)
            .end((err, res)=> {
                next({type:action.type,result:res.body.isSuccess})
            })
    }
    else {
        next(action);
    }
}