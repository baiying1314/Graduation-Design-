import React, {Component} from "react";
import {render} from "react-dom";

export default class ExaminationPlan extends Component {
    createPlan() {
        window.location.href="/examinationPlanInfo";
    }

    render() {
        return <div id="exam">
            <div id="exam-title">
                <h1>考核计划管理</h1>
            </div>
            <div id="exam-main" className="row">
                <select name="ex-profession" id="" className="col-md-2 btn btn-primary">
                    <option value="" hidden="hidden">请选择专业</option>
                    <option value="">软件工程</option>
                    <option value="">网络工程</option>
                </select>

                <select name="ex-profession" id="" className="col-md-2 col-md-offset-1 btn btn-primary">
                    <option value="" hidden="hidden">请选择年级</option>
                    <option value="">2014级</option>
                    <option value="">2015级</option>
                </select>
                <input type="text" placeholder="请输入课程名" className="col-md-2  col-md-offset-1 btn btn-primary"/>
                <button className="col-md-1 col-md-offset-1 btn btn-primary">查询考试计划</button>
                <button className="col-md-1 btn btn-primary" onClick={this.createPlan.bind(this)}>创建考试计划</button>
            </div>

        </div>
    }
}
