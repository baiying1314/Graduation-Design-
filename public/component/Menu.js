import React, {Component} from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return <div id="main">
            <img id = 'logo'src="../style/images/logo.png" alt=""/><h1>毕业要求达成度评价系统</h1>
            <div id="nav" className='row'>
                <div className='col-md-2 '>
                    <Link style={{color:"white"}} to='/menu'>
                        <div id="GraduationRequirements"><p>系统首页</p></div>
                    </Link>
                </div>
                <div className='col-md-2 col-md-offset-1'>
                    <Link style={{color:"white"}} to='/graduationRequirements'>
                        <div id="GraduationRequirements"><p>毕业要求管理</p></div>
                    </Link>
                </div>
                <div className='col-md-2 col-md-offset-1'>
                    <Link style={{color:"white"}} to='/ExaminationPlan'>
                        <div id="ExaminationPlan"><p>考核计划查看</p></div>

                    </Link>
                </div>
                <div className='col-md-2 col-md-offset-1'>
                    <Link style={{color:"white"}} to='/examinationPlanInfo'>
                        <div id="examinationPlanInfo"><p>编写考核计划</p></div>
                    </Link>
                </div>
            </div>

        </div>


    }
}
