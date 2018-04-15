require("!style-loader!css-loader!./public/style/main.css");
import React from "react";
import {render} from "react-dom";
import {IndexRoute, hashHistory} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./public/component/main.js";
import ExaminationPlan from "./public/component/ExaminationPlan.js";
import GraduationRequirements from "./public/component/GraduationRequirments";
import Menu from "./public/component/Menu.js";


render(<Router history={hashHistory}>
        <Main>
            <Route path='/menu' component={Menu}/>
            <Route path='/graduationRequirements' component={GraduationRequirements}/>
            <Route path='/examinationPlan' component={ExaminationPlan}/>
        </Main>
    </Router>
    , document.getElementById("content"));