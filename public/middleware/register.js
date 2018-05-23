import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "REGISTER") {
        request.post('/register')
            .send(action.registerInfo)
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action);
    }
}