import React, {Component} from "react";
import {render} from "react-dom";
import Menu from "./Menu"


export default class ExaminationPlanInfo extends Component {
    componentWillMount() {
        this.props.getAllProfessions();
    }

    getPoints() {
        var infoDiv = document.getElementById('info');
        var profession = document.getElementById('write-profession').value;
        var level = document.getElementById('level-write').value;
        if (profession && level) {
            infoDiv.hidden = false;
            this.props.getPoints({profession, level});
        }
        else {
            alert('请选择专业和年级')
        }
    }

    allSelected() {
        var question = document.getElementsByName('question');
        var questionArr = Array.from(question);

        questionArr.forEach((obj, index)=> {
            obj.checked === true;
        });
        console.log(questionArr);
    }

    inputDetails() {
        var pointsNode = document.getElementsByName('point');
        var points = Array.from(pointsNode);

        var pointsArr = points.filter((obj, index)=> {
            return obj.checked === true;
        });
        if (pointsArr.length > 0) {
            var writeTable = document.getElementById('writeTable');
            var tableHead = document.getElementById('writeHead');
            var writeBody = document.getElementById('writeBody');
            var trWeight = document.createElement('tr');

            var points = document.getElementsByName('point');
            var pointsArr = Array.from(points);
            var selectedPoints = pointsArr.filter((obj, index)=> {
                return obj.checked === true;
            });
            var tdWeight = selectedPoints.map(()=> {
                return `<td><input name="inputWeight"  step="0.1" type="number" max="1" min="0.01" placeholder="权重"></td>`
            });
            tdWeight = tdWeight.join("");
            trWeight.innerHTML = `<td colspan="7">请为各个指标点赋予权重</td>${tdWeight}`;
            writeBody.appendChild(trWeight);

            var pointTh = selectedPoints.map((obj, index)=> {
                return `<th>指标点${obj.value}赋分</th>`;
            });
            pointTh = pointTh.join("");
            tableHead.innerHTML = `<tr><th><button id="allSelected"></button></th><th>大题号</th><th>小题号</th><th>赋分</th><th>层次</th><th>类型</th><th>内容</th>${pointTh}</tr>`;
            var tableInfo1 = document.getElementById('info1');
            tableInfo1.hidden = false;

            // document.getElementById('allSelected').onclick = ()=> {
            //     this.allSelected();
            // }
        }
        else {
            alert('没有选择支持指标点无法进行下一步,请选择至少一个或者选择其他专业年级')
        }
    }

    writeQuestions() {
        var writeBody = document.getElementById('writeBody');
        var points = document.getElementsByName('point');
        var pointsArr = Array.from(points);
        var selectedPoints = pointsArr.filter((obj, index)=> {
            return obj.checked === true;
        });
        var trNode = document.createElement('tr');
        for (var i = 0; i < selectedPoints.length + 7; i++) {
            var tdNode = document.createElement('td');
            if (i === 0) {
                tdNode.innerHTML = `<input type='checkbox' name="question"/>`
            }
            else if (i === 1 || i === 2) {
                tdNode.innerHTML = `<input type="number" min="1"/>`;
            } else if (i === 3) {
                tdNode.innerHTML = `<input type="number" step="0.1" min="0.1"/>`;

            }
            else if (i === 4) {
                tdNode.innerHTML = `<select><option value="基础">基础</option><option value="简单应用">简单应用</option><option value="综合应用">综合应用</option></select>`
            }
            else if (i === 5) {
                tdNode.innerHTML = `<select><option value="填空">填空</option><option value="单项选择">单项选择</option><option value="多项选择">多项选择</option><option value="判断题">判断题</option><option value="简答">简答</option><option value="论述">论述</option><option value="分析">分析</option><option value="计算">计算</option><option value="证明">证明</option><option value="案例分析">案例分析</option><option value="作文">作文</option><option value="程序设计">程序设计</option><option value="其他">其他</option></select>`
            }
            else if (i == 6) {
                tdNode.innerHTML = `<textarea></textarea>`
            }
            else {
                tdNode.innerHTML = `<input type="number" step="0.1" min="0"/>`
            }

            trNode.appendChild(tdNode);
        }
        writeBody.appendChild(trNode);
    }

    deleteQuestions() {
        var writeBody = document.getElementById('writeBody');

        var questions = document.getElementsByName('question');
        var pointsArr = Array.from(questions);
        var selectedPoints = pointsArr.filter((obj, index)=> {
            return obj.checked === true;
        });
        if (selectedPoints.length > 0) {
            selectedPoints.forEach((obj)=> {
                writeBody.removeChild(obj.parentElement.parentElement);
            });
        }
    }

    submitWritePlan() {
        var profession = document.getElementById('write-profession').value;
        var level = document.getElementById('level-write').value;

        var pointsNode = document.getElementsByName('point');
        var points = Array.from(pointsNode);

        var pointsArr = points.filter((obj, index)=> {
            return obj.checked === true;
        });
        var pointsWeight = Array.from(document.getElementsByName('inputWeight'));
        var pointsWeightValue = pointsWeight.map((obj)=> {
            return parseFloat(obj.value);
        });

        var pointsWeightArr = pointsArr.map((obj)=> {
            return obj.value;
        });

        var usefulPoints = [];
        for (var i = 0; i < pointsWeightArr.length; i++) {
            usefulPoints.push({point: pointsWeightArr[i], weight: pointsWeightValue[i]});
        }

        var year = document.getElementById('write-year').value;
        var term = document.getElementById('write-term').value;
        var course = document.getElementById('write-course').value;
        var school = document.getElementById('write-school').value;
        var long = parseInt(document.getElementById('write-long').value);
        var teacher = document.getElementById('write-teacher').value;
        var hopeGrade = parseFloat(document.getElementById('write-hopeGrade').value);
        var examDate = document.getElementById('write-examDate').value;
        var startEndTime = document.getElementById('write-examTime').value;

        var ABArr = Array.from(document.getElementsByName('write-AB')).filter((obj)=> {
            return obj.checked === true;
        });

        var examWayArr = Array.from(document.getElementsByName('write-examWay')).filter((obj)=> {
            return obj.checked === true;
        });
        var ABCArr = Array.from(document.getElementsByName('ABC')).filter((obj)=> {
            return obj.checked === true;
        });
        if (ABArr.length > 0 && examWayArr.length > 0 && ABCArr.length > 0) {
            var AB = ABArr[0].value;
            var examWay = examWayArr[0].value;
            var isABC = ABCArr[0].value;
        }

        var writeBodyChildren = Array.from(document.getElementById('writeBody').children);
        writeBodyChildren.shift();
        var questions = writeBodyChildren.map((obj)=> {
            var big = parseInt(obj.children[1].children[0].value);
            var small = parseInt(obj.children[2].children[0].value);
            var values = parseFloat(obj.children[3].children[0].value);
            var cengci = obj.children[4].children[0].value;
            var type = obj.children[5].children[0].value;
            var content = obj.children[6].children[0].value;
            var pointsGrade = [];
            for (var i = 7, j = 0; i < obj.childElementCount; i++, j++) {
                pointsGrade.push({point: pointsWeightArr[j], grade: parseFloat(obj.children[i].children[0].value)});
            }
            return {big, small, values, cengci, type, content, pointsGrade}
        });
        if (!(profession && level && usefulPoints.length > 0 && year && term && course && school && long && teacher && hopeGrade && examDate && startEndTime && AB && isABC && examWay)) {
            alert('请按要求输入完整信息');
        }
        else if (questions.length < 1) {
            alert('请添加题目')
        }
        else {
            var planObj = {
                profession,
                level,
                usefulPoints,
                year,
                term,
                course,
                school,
                long,
                teacher,
                hopeGrade,
                examDate,
                startEndTime,
                AB,
                isABC,
                examWay,
                questions
            };
            this.props.addCoursePlan(planObj);
        }
    }


    render() {
        const addPlanResult = this.props.examinationPlanInfo.addPlanResult;
        const points = this.props.examinationPlanInfo.points;
        console.log(this.props.examinationPlanInfo.points);
        const optionCheckbox = points.map((obj, index)=> {
            const pointsLi = obj.index_point.map((item)=> {
                return <p>{points.indexOf(obj)+1}-{obj.index_point.indexOf(item)+1}<input name='point' type="checkbox" value={item}/>&nbsp;&nbsp;{item}</p>
            });
            return <p>{points.indexOf(obj)+1}{obj.gra_requirements}{pointsLi}</p>

        });
        const professions = this.props.examinationPlanInfo.professions;
        const professionsOption = professions.map((obj, index)=> {
            return <option value={obj}>{obj}</option>
        });
        return <div id="writePlan">
            <Menu/>

            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：编写考核计划</div>

            <div className='container add'>
                <div id="write-main" className="row">
                    <select name="ex-profession" id="write-profession" className="col-md-2 btn">
                        <option value='' hidden="hidden">请选择专业</option>
                        {professionsOption}
                    </select>
                    <div className="col-md-4 col-md-offset-1 ">
                        <span className="btn">年级&nbsp;&nbsp;&nbsp;</span>
                        <input type="number" id="level-write" className="btn-sm" defaultValue="2014"
                               placeholder="输入年级"/>

                    </div>
                    <div className="col-md-3 col-md-offset-2">
                        <button id="plan-submit" className="btn-sm btn-primary"
                                onClick={this.getPoints.bind(this)}> 确认编写
                        </button>
                    </div>
                </div>
                <br/>
                <div id="info" hidden="hidden">
                    <p>请选择本试题所支撑指标点以及其权重</p>
                    <div id="selectOptions">
                        {optionCheckbox}
                    </div>
                    <br/>
                    <button id="plan-submit" className="btn-sm btn-primary" onClick={this.inputDetails.bind(this)}>
                        下一步
                    </button>
                </div>
                <br/>
                <div id="info1" hidden="hidden">
                    <h4>录入试题基本信息</h4>
                    <div id="baseInfoInput" className="row">
                        <div className="col-md-4">
                            <span >学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;</span>
                            <select name="year" id="write-year" className="btn-sm ">
                                <option>{new Date().getFullYear() - 4}-{new Date().getFullYear() - 3}</option>
                                <option>{new Date().getFullYear() - 3}-{new Date().getFullYear() - 2}</option>
                                <option>{new Date().getFullYear() - 2}-{new Date().getFullYear() - 1}</option>
                                <option>{new Date().getFullYear() - 1}-{new Date().getFullYear()}</option>
                                <option>{new Date().getFullYear()}-{new Date().getFullYear() + 1}</option>

                            </select>
                        </div>
                        <div className="col-md-4">
                            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期&nbsp;</span>
                            <select name="year" id="write-term" className="btn-sm">
                                <option value="1">１</option>
                                <option value="2">２</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <span>课程名称&nbsp;&nbsp;</span>
                            <input type="text" id='write-course' className="btn-sm " placeholder="输入课程"/>
                        </div>
                        <br/><br/>
                        <div className="col-md-4">
                            <span>开课单位&nbsp;&nbsp;</span>
                            <input type="text" id="write-school" className="btn-sm " placeholder="开课单位"/>
                        </div>
                        <div className="col-md-4">
                            <span>计划学时&nbsp;&nbsp;</span>
                            <input type="number" id="write-long" min="1" className="btn-sm" placeholder="计划学时"/>
                        </div>

                        <div className="col-md-4">
                            <span>命题教师&nbsp;&nbsp;</span>
                            <input type="text" id="write-teacher" className="btn-sm" placeholder="命题教师"/>
                        </div>
                        <br/><br/>
                        <div className="col-md-4">
                            <span>期望成绩&nbsp;&nbsp;</span>
                            <input type="number" id='write-hopeGrade' step="0.1" className="btn-sm"
                                   placeholder="预估平均成绩"/>
                        </div>
                        <div className="col-md-4"><span>考试日期&nbsp;&nbsp;</span>
                            <input id="write-examDate" type="date" className="btn-sm" value="2018-05-12"/>
                        </div>
                        <div className="col-md-4"><span>考试时间&nbsp;&nbsp;</span>
                            <input id="write-examTime" type="text" className="btn-sm" placeholder="例：11:00-13:00"/>
                        </div>
                        <br/><br/>
                        <div className="col-md-4">
                            <span>AB卷制&nbsp;&nbsp;&nbsp;</span>
                            <span>&nbsp;是&nbsp;</span><input type="radio" name="write-AB" value='是'/>
                            <span>&nbsp;否&nbsp;</span><input type="radio" name="write-AB" value='否'/>
                        </div>
                        <div className="col-md-4">
                            <span>考试方式&nbsp;</span>
                            <span>&nbsp;&nbsp;开卷&nbsp;</span><input type="radio" name="write-examWay" value='开卷'/>
                            <span>&nbsp;&nbsp;闭卷&nbsp;</span><input type="radio" name="write-examWay" value='闭卷'/>
                            <span>&nbsp;&nbsp;其他&nbsp;</span><input type="radio" name="write-examWay" value='其他'/>
                        </div>
                        <div className="col-md-4">
                            <span>试卷类型   </span>
                            <span>&nbsp;A卷&nbsp; </span><input type="radio" name="ABC" value='A'/>
                            <span>&nbsp;B卷&nbsp; </span><input type="radio" name="ABC" value='B'/>
                            <span>&nbsp;C卷&nbsp;</span><input type="radio" name="ABC" value='C'/>
                        </div>
                    </div>
                    <br/><br/>
                    <h4>录入题目(录入各指标点权重并且录入试题所有题目（不少于5道题）)</h4>
                    <div id="tableContent">
                        <table id="writeTable" className="table table-bordered">
                            <thead id="writeHead"></thead>
                            <tbody id="writeBody">
                            </tbody>
                        </table>
                        <div className="row">
                            <button className="col-md-2 btn-sm btn-primary" onClick={this.writeQuestions.bind(this)}>
                                增加一题
                            </button>
                            <button className="col-md-2 col-md-offset-1 btn-sm btn-primary"
                                    onClick={this.deleteQuestions.bind(this)}>移除所选题目
                            </button>

                            <button className="col-md-2 col-md-offset-1 btn-sm btn-primary"
                                    onClick={this.submitWritePlan.bind(this)}>完成并提交
                            </button>
                            <div>
                                {addPlanResult === true ? "添加成功" : ""}
                                {addPlanResult === false ? "添加失败此项计划可能已经存在" : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}