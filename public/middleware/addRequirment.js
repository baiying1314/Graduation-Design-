import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "ADDREQ" || action.type === "ADDPRO" || action.type === "ADDPOINT") {
        request.post(`/requirement`)
            .send(action.addReqInfo)
            .end((err, res)=> {
                console.log(action.addReqInfo);
                next({type: action.type, result: res.body});
                if (res.body.isSuccess === true) {
                    store.dispatch({
                        type: "GETREQPOINT",
                        proLevel: {
                            professionVal: action.addReqInfo.selectedProfession,
                            levelVal: action.addReqInfo.selectedLevel
                        }
                    })
                }
            })
    }
    else {
        next(action);
    }
}