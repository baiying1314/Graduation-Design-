require("!style-loader!css-loader!./public/style/main.css");
import React from "react";
import {render} from "react-dom";
import {IndexRoute, hashHistory} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Main from "./public/component/main";
import ExaminationPlan from "./public/component/ExaminationPlan";
import Menu from "./public/component/Menu";
import ExaminationPlanInfo from "./public/component/ExaminationPlanInfo";
import Home from './public/component/Home'

import getAllProfessions from "./public/middleware/getAllProfessions";
import deleteProfession from "./public/middleware/deleteProfession";
import getReqPoints from "./public/middleware/getReqPoint";
import changePoint from "./public/middleware/changePoint";
import addRequirment from "./public/middleware/addRequirment";
import addProfession from "./public/middleware/addProfession";

import GraduationRequirements from "./public/container/GraduationRequirments";
import reducer from "./public/reducer/index";

const middleware = applyMiddleware(getAllProfessions, deleteProfession,getReqPoints,changePoint,addRequirment,addProfession);
const store = createStore(reducer, middleware);


render(<Provider store={store}>
    <Router history={hashHistory}>
        <Main>
            <Route path='/menu' component={Home}/>
            <Route path='/graduationRequirements' component={GraduationRequirements}/>
            <Route path='/examinationPlan' component={ExaminationPlan}/>
            <Route path='/examinationPlanInfo' component={ExaminationPlanInfo}/>
        </Main>
    </Router>
</Provider>, document.getElementById("content"));