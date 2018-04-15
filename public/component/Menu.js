import React, {Component} from "react";
import {render} from "react-dom";
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return <div id="container-fluid">
            <div id="main">
                <h1>毕业要求达成度评价系统</h1>
            </div>
            <div id="sg1" className='row'>
                <div className='col-md-2 col-md-offset-4'>
                    <Link to='/graduationRequirements'>
                        <div id="GraduationRequirements"><p>毕业要求管理</p></div>
                    </Link>
                </div>
                <div className='col-md-2'>
                    <Link to='/ExaminationPlan'>
                        <div id="ExaminationPlan"><p>考核计划管理</p></div>

                    </Link>
                </div>
            </div>
            <div className='row'>
                <Link to='/ExaminationPlan'>
                    <div id="ExaminationPlan" className="col-md-2 col-md-offset-5"><p>mubiaodachengdu</p></div>
                </Link>
            </div>
        </div>
    }
}
