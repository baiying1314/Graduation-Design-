import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "LOGIN") {
        request.post('/login')
            .send(action.loginInfo)
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action);
    }
}