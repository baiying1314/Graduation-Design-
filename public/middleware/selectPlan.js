import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "SELECTPLAN") {
        request.post(`/examPlans`)
            .send(action.selectPlanInfo)
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action);
    }
}