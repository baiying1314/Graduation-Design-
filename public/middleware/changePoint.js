import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "CHANGEPOINT") {
        request.patch(`/point`)
            .send(action.changeInfo.changeData)
            .end((err, res)=> {
                next({type:'CHANGEPOINT',result:res.body});
                if (res.body.isSuccess=== true) {
                    store.dispatch({type: "GETREQPOINT",proLevel:action.changeInfo.proLevel})
                }
            })
    }
    else {
        next(action);
    }
}