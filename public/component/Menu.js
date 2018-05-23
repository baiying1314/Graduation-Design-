import React, {Component} from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return <div id="main">
            <img id = 'logo'src="../style/images/logo.png" alt=""/><h1>毕业要求达成度评价系统</h1>
         <div className="row"><span className="col-md-offset-10">当前用户：白颖</span></div>
            <div id="nav" className=''>
                <div className='navTitle'>
                    <Link style={{color:"white"}} to='/home'>
                        <div id="GraduationRequirements"><p>系统首页</p></div>
                    </Link>
                </div>
                <div className='navTitle '>
                    <Link style={{color:"white"}} to='/graduationRequirements'>
                        <div id="GraduationRequirements"><p>毕业要求管理</p></div>
                    </Link>
                </div>
                <div className='navTitle'>
                    <Link style={{color:"white"}} to='/ExaminationPlan'>
                        <div id="ExaminationPlan"><p>考核计划查看</p></div>

                    </Link>
                </div>
                <div className='navTitle '>
                    <Link style={{color:"white"}} to='/examinationPlanInfo'>
                        <div id="examinationPlanInfo"><p>编写考核计划</p></div>
                    </Link>
                </div>
                <div className='navTitle '>
                    <Link style={{color:"white"}} to='/achievement'>
                        <div id=""><p>成绩达成度</p></div>
                    </Link>
                </div>
            </div>

        </div>


    }
}
