require("!style-loader!css-loader!./public/style/main.css");
import React from "react";
import {render} from "react-dom";
import {IndexRoute, hashHistory} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import Main from "./public/component/main.js";
import ExaminationPlan from "./public/component/ExaminationPlan.js";
import Menu from "./public/component/Menu.js";

import getAllProfessions from "./public/middleware/getAllProfessions";
import deleteProfession from "./public/middleware/deleteProfession";

import GraduationRequirements from "./public/container/GraduationRequirments";

import reducer from "./public/reducer/index";

const middleware = applyMiddleware(getAllProfessions,deleteProfession);
const store = createStore(reducer, middleware);


render(<Provider store={store}>
    <Router history={hashHistory}>
        <Main>
            <Route path='/menu' component={Menu}/>
            <Route path='/graduationRequirements' component={GraduationRequirements}/>
            <Route path='/examinationPlan' component={ExaminationPlan}/>
        </Main>
    </Router>
</Provider>, document.getElementById("content"));