import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "GETREQPOINT") {
        request.post('/requirements')
            .send(action.proLevel)
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action);
    }
}