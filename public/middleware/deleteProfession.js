import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "DELETEPROFESSION") {
        request.delete(`/profession`)
            .send(action.deleteInfo.deleteInfo)
            .end((err, res)=> {
                console.log(res.body);
                    store.dispatch({type: "GETREQPOINT",proLevel:action.deleteInfo.proLevel});
            })
    }
    else {
        next(action);
    }
}