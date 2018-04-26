import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "CHANGEPOINT") {
        request.patch(`/point`)
            .send(action.changeInfo.changeData)
            .end((err, res)=> {
                if (res.status === 200) {
                    store.dispatch({type: "GETREQPOINT",proLevel:action.changeInfo.proLevel})
                }
            })
    }
    else {
        next(action);
    }
}