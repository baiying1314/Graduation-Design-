import React, {Component} from "react";
import {render} from "react-dom";

export default class ExaminationPlanInfo extends Component {
    inputDetails() {
        $("#modal").modal('show');
    }

    render() {
        return <div id="plan">
            <div id="plan-title">
                <h1>编写考核计划</h1>
            </div>
            <div id="plan-main">
                <div id="">
                    <input type="text" className="btn" placeholder="请填写开课单位"/>
                    <input type="text" className="btn" placeholder="请填写计划学时"/>
                    <input type="text" className="btn" placeholder="请填写命题教师"/>
                    <input type="text" className="btn" placeholder="请填写预估平均成绩"/>
                    <input type="date" className="btn" value="2018" placeholder="请填写命题日期"/>
                    <input type="time" className="btn" placeholder="请填写考试时间"/><br/><br/>
                    <span>是否ＡＢ卷制</span><br/>
                    <span>是</span><input type="radio" name="AB" value='y'/>
                    <span>否</span><input type="radio" name="AB" value='n'/><br/><br/><br/>
                    <span>考试方式</span><br/>
                    <span>开卷</span><input type="radio" name="examWay" value='kai'/>
                    <span>闭卷</span><input type="radio" name="examWay" value='bi'/>
                    <span>其他</span><input type="radio" name="examWay" value='other'/><br/><br/>
                    <span>请选择本试题所支撑指标点</span><br/>
                    <span>1.1</span><input type="checkbox" name="point" value='1.1'/>
                    <span>1.2</span><input type="checkbox" name="point" value='1.2'/>
                    <span>1.3</span><input type="checkbox" name="point" value='1.3'/>
                    <span>2.1</span><input type="checkbox" name="point" value='2.1'/>
                    <span>2.2</span><input type="checkbox" name="point" value='2.2'/>
                    <span>2.3</span><input type="checkbox" name="point" value='2.3'/>
                    <span>3.1</span><input type="checkbox" name="point" value='3.1'/>
                    <span>3.2</span><input type="checkbox" name="point" value='3.2'/>
                    <span>3.3</span><input type="checkbox" name="point" value='3.3'/>
                    <span>4.1</span><input type="checkbox" name="point" value='4.1'/>
                    <span>4.2</span><input type="checkbox" name="point" value='4.2'/>
                    <span>4.3</span><input type="checkbox" name="point" value='4.3'/>
                    <span>5.1</span><input type="checkbox" name="point" value='5.1'/>
                    <span>5.2</span><input type="checkbox" name="point" value='5.2'/>
                    <span>5.3</span><input type="checkbox" name="point" value='5.3'/>
                </div>
                <button id="plan-submit" className="btn btn-primary" onClick={this.inputDetails.bind(this)}>确认试题信息并进行下一步</button>
            </div>


            <div className="modal fade bs-example-modal-lg" id="modal" ref='modal' role="dialog" data-toggle="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">试题赋分方案</h4>
                        </div>
                        <div className="">
                            <div className="info input-group">
                                <label className="input-group-addon">大题号</label><input type="number"
                                                                                       className="form-control"/></div>
                            <div className="info input-group"><label className="input-group-addon">小题号</label><input
                                type="number" className="form-control"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">赋分</label> <input
                                type="bumber" className="form-control"/>
                            </div>

                            <div className="info input-group"><label className="input-group-addon">指标点1.1赋分</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">指标点3.1赋分</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">指标点5.2赋分</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group info"><select name="" id="" className="form-control">
                                <option value="">层次</option>
                                <option value="">基础</option>
                                <option value="">简单</option>
                                <option value="">综合</option>
                            </select></div>
                            <div className="form-group info">
                                <select name="" id="" className="form-control">
                                    <option value="">类型</option>
                                    <option value="">填空</option>
                                    <option value="">选择</option>
                                    <option value="">问答</option>
                                    <option value="">判断</option>
                                </select>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary">确认信息并继续录入</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}