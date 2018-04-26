import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "DELETEPROFESSION") {
        request.delete(`/profession?id=${action.deleteInfo.id}`)
            .end((err, res)=> {
                if (res.status === 200) {
                    store.dispatch({type: "GETREQPOINT",proLevel:action.deleteInfo.proLevel});
                }
            })
    }
    else {
        next(action);
    }
}