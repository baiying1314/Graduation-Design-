require("!style-loader!css-loader!./public/style/main.css");
import React from "react";
import {render} from "react-dom";
import {IndexRoute, hashHistory} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Main from "./public/component/main";
import ExaminationPlan from "./public/container/ExaminationPlan";
import ExaminationPlanInfo from "./public/container/ExaminationPlanInfo";
import Login from "./public/container/Login";
import Register from "./public/container/Register";
import Achievement from "./public/container/AchieveMent";
import Home from "./public/component/Home";
import getAllProfessions from "./public/middleware/getAllProfessions";
import deleteProfession from "./public/middleware/deleteProfession";
import getReqPoints from "./public/middleware/getReqPoint";
import changePoint from "./public/middleware/changePoint";
import addRequirment from "./public/middleware/addRequirment";
import addProfession from "./public/middleware/addProfession";
import selectPlan from "./public/middleware/selectPlan";
import deletePlan from "./public/middleware/deletePlan";
import getProLevelOptions from "./public/middleware/getProLevelOptions";
import addCoursePlan from "./public/middleware/addCoursePlan";
import login from "./public/middleware/login";
import register from "./public/middleware/register";
import getAllPlans from "./public/middleware/getAllPlans";
import GraduationRequirements from "./public/container/GraduationRequirments";
import reducer from "./public/reducer/index";
// import selectPlanDetils from "./public/middleware/getPlanDetils";

const middleware = applyMiddleware(getAllProfessions, deleteProfession, getReqPoints, changePoint, addRequirment, addProfession, selectPlan, deletePlan, getProLevelOptions, addCoursePlan, login, register, getAllPlans);
const store = createStore(reducer, middleware);


render(<Provider store={store}>
    <Router history={hashHistory}>
        <Main>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Home}/>
            <Route path='/graduationRequirements' component={GraduationRequirements}/>
            <Route path='/examinationPlan' component={ExaminationPlan}/>
            <Route path='/examinationPlanInfo' component={ExaminationPlanInfo}/>
            <Route path='/achievement' component={Achievement}/>
        </Main>
    </Router>
</Provider>, document.getElementById("content"));