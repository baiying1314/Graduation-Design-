import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "ADDREQ") {
        request.post(`/requirment`)
            .send(action.addReqInfo)
            .end((err, res)=> {
                if (res.status === 200) {
                    store.dispatch({type: "GETREQPOINT",proLevel:{professionVal:action.addReqInfo.selectedProfession,levelVal:action.addReqInfo.selectedLevel}})
                }
            })
    }
    else {
        next(action);
    }
}