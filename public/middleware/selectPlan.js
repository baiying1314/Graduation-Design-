import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "SELECTPLAN") {
        request.get(`/examPlans?selectedProfession=${action.selectPlanInfo.profession}&selectedLevel=${action.selectPlanInfo.level}&selectedYear=${action.selectPlanInfo.year}&selectedTerm=${action.selectPlanInfo.term}`)
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action);
    }
}