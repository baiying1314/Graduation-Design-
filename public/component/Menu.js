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
                        <div id="ExaminationPlan"><p>考核计划管理</p></div>

                    </Link>
                </div>
                <div className='col-md-2 col-md-offset-1'>
                    <Link style={{color:"white"}} to='/ExaminationPlan'>
                        <div id="ExaminationPlan"><p>达成度评价模块</p></div>
                    </Link>
                </div>
            </div>
            <div className="left">

                <div className="tip">当前用户：xxx</div>
                <div className="tip">系统公告</div>
                <div className="tip">新闻链接</div>
                <div className="tip">关于我们</div>
            </div>
        </div>


    }
}
