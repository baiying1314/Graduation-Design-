import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "DELETEPLAN") {
        request.delete(`/plan?id=${action.deleteInfo.deleteId}`)
            .send({id:action.deleteInfo.deleteId})
            .end((err, res)=> {
                if (res.status === 200) {
                    store.dispatch({type: "SELECTPLAN",selectPlanInfo:action.deleteInfo.selectInfo});
                }
            })
    }
    else {
        next(action);
    }
}