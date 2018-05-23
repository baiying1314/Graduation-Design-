import React, {Component} from "react";
import {render} from "react-dom";
import Menu from "./Menu";


export default class ExaminationPlan extends Component {
    componentWillMount() {
        this.props.getAllProfessions();

    }

    createOption() {
        const professionsArr = this.props.examinationPlan.professions;
        const professionsOption = professionsArr.map((profession, index)=> {
            return <option key={index} value={profession}>{profession}</option>

        });
        return professionsOption;
    }

    selectPlans() {
        let profession = document.getElementById('exan-profession').value;
        let level = document.getElementById('level-sel').value;
        let year = document.getElementById('exam-year').value;
        let term = document.getElementById('exam-term').value;
        let tableTitle = document.getElementById('tableTitle');
        if (profession && level && year && term) {
            tableTitle.innerHTML = `${profession}${level}级${year}学年第${term}学期考试计划`;
            const tablethead = document.getElementById('tablethead');
            tablethead.innerHTML = `<th>课程</th>
            <th>开课单位</th>
            <th>计划学时</th>
            <th>命名教师</th>
            <th>预估平均成绩</th>
            <th>命题日期</th>
            <th>考试日期</th>
            <th>考试时间</th>
            <th>是否AB卷</th>
            <th>ABC卷</th>
            <th>考试方式</th>`;
            this.props.selectPlans({profession, level, year, term});
        }
        else {
            alert('请选择查询信息！');
        }

    }


    selectPlanDetils(obj) {
        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        const tablethead = document.getElementById('tablethead');
        tablethead.innerHTML = `<th>大题号</th>
            <th>小题号</th>
            <th>赋分</th>
            <th>层次</th>
            <th>内容</th>
            <th>支撑指标点</th> `;
        const tableTitle = document.getElementById('tableTitle');
        tableTitle.innerHTML = `试题与毕业要求支撑关系表(${profession}${level}级${year}学年第${term}学期${obj.course})`;
        this.props.selectPlanDetils1({questions: obj.questions, status: 2});
    }

    selectPlanDetils1(obj) {
        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        const tablethead = document.getElementById('tablethead');
        tablethead.innerHTML = `<th>指标点 \\ 层次</th>
            <th>基础(%)</th>
            <th>简单应用(%)</th>
            <th>综合应用(%)</th>
            <th>比重和(%)</th>`;
        const tableTitle = document.getElementById('tableTitle');
        tableTitle.innerHTML = `试题设计双向细目表(${profession}${level}级${year}学年第${term}学期${obj.course})`;
        this.props.selectPlanDetils2({usefulPoints: obj.usefulPoints, status: 3});
    }

    selectPlanDetils2(obj) {

        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        const tablethead = document.getElementById('tablethead');
        tablethead.innerHTML = `<th>题型</th>
            <th>题量(道)</th>
            <th>赋分方案分布(分)</th>`;

        const tableTitle = document.getElementById('tableTitle');
        tableTitle.innerHTML = `试题赋分方案表(${profession}${level}级${year}学年第${term}学期${obj.course})`;
        this.props.selectPlanDetils3({questionsInfo: obj.questionsInfo, status: 4});
    }

    method5(tableid) {
        function getExplorer() {
            var explorer = window.navigator.userAgent;//获取浏览器；
            //ie
            if (explorer.indexOf("MSIE") >= 0) {
                return ("ie");
            }
            //firefox
            else if (explorer.indexOf("Firefox") >= 0) {
                return ("Firefox");
            }
            //Chrome
            else if (explorer.indexOf("Chrome") >= 0) {
                return ('chrome');
            }
            //Opera
            else if (explorer.indexOf("Opera") >= 0) {
                return ('opera');
            }
            //Safari
            else if (explorer.indexOf("Safari") >= 0) {
                return ("Safari");
            }
        }

        if (getExplorer() == 'ie') {
            var curTbl = document.getElementById(tableid);
            var oXL = new ActiveXObject("Excel.Application");
            var oWB = oXL.Workbooks.Add();
            var xlsheet = oWB.Worksheets(1);
            var sel = document.body.createTextRange();
            sel.moveToElementText(curTbl);
            sel.select();
            sel.execCommand("Copy");
            xlsheet.Paste();
            oXL.Visible = true;

            try {
                var fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
            } catch (e) {
                print("Nested catch caught " + e);
            } finally {
                oWB.SaveAs(fname);
                oWB.Close(savechanges = false);
                oXL.Quit();
                oXL = null;
                idTmr = window.setInterval("Cleanup();", 1);
            }

        }
        else {

            this.tableToExcel(tableid)
        }
    }

    Cleanup() {
        window.clearInterval(idTmr);
        CollectGarbage();
    }

    tableToExcel(table) {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',
            base64 = function (s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            },
            format = function (s, c) {
                return s.replace(/{(\w+)}/g,
                    function (m, p) {
                        return c[p];
                    })
            };
        return function (table, name) {
            console.log(name);
            if (!table.nodeType) table = document.getElementById(table);
            var ctx = {worksheet: name || 'Worksheet', table: table.outerHTML};
            window.location.href = uri + base64(format(template, ctx))
        }(table);
    };

    deletePlan(deleteId) {
        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        this.props.deletePlan({deleteId, selectInfo: {profession, level, year, term}});
    }

    render() {
        const professionsOption = this.createOption();
        const plans = this.props.examinationPlan.plans;
        const questions = this.props.examinationPlan.questions;
        const usefulPoints = this.props.examinationPlan.usefulPoints;
        const questionsInfo = this.props.examinationPlan.questionsInfo;
        const planTable = plans.map((obj, index)=> {
            return <tr key={index}>
                <td>{obj.course}</td>
                <td>{obj.school}</td>
                <td>{obj.long}</td>
                <td>{obj.teacher}</td>
                <td>{obj.hopeGrade}</td>
                <td>{obj.createdAt.slice(0, 10)}</td>
                <td>{obj.examDate}</td>
                <td>{obj.startEndTime}</td>
                <td>{obj.AB}</td>
                <td>{obj.isABC}</td>
                <td>{obj.examWay}</td>
                <td>
                    <button onClick={this.selectPlanDetils.bind(this, obj)}>支撑关系表</button>
                </td>
                <td>
                    <button onClick={this.selectPlanDetils1.bind(this, obj)}>双向细目表</button>
                </td>
                <td>
                    <button onClick={this.selectPlanDetils2.bind(this, obj)}>赋分方案表</button>
                </td>
                <td>
                    <button onClick={this.deletePlan.bind(this, obj._id)}>删除</button>
                </td>
            </tr>
        });

        const questionsTable = questions.map((obj, index)=> {
            const point = obj.pointsGrade.map((obj, index)=> {
                return <td>{obj.point}({obj.grade}分)</td>
            });

            return <tr rowSpan={obj.pointNum} key={index}>
                <td>{obj.big}</td>
                <td>{obj.small}</td>
                <td>{obj.values}</td>
                <td>{obj.cengci}</td>
                <td>{obj.content}</td>
                <td>{point}</td>
            </tr>;
        });

        let basis = 0;
        let simple = 0;
        let complex = 0;


        const usefulPointsTable = usefulPoints.map((obj, index)=> {
            basis += parseFloat(obj.basis_percentage) * 100;
            simple += parseFloat(obj.simple_application_percentage) * 100;
            complex += parseFloat(obj.complex_application_percentage) * 100;
            return <tr>
                <td>{obj.point}</td>
                <td>{(obj.basis_percentage * 100).toFixed(2)}</td>
                <td>{(obj.simple_application_percentage * 100).toFixed(2)}</td>
                <td>{(obj.complex_application_percentage * 100).toFixed(2)}</td>
                <td>{((obj.basis_percentage * 100 + obj.complex_application_percentage * 100 + obj.simple_application_percentage * 100))}</td>
            </tr>
        });
        let all = basis + simple + complex;
        let lasttr = <tr>
            <td>比重和</td>
            <td>{basis.toFixed(2)}</td>
            <td>{simple.toFixed(2)}</td>
            <td>{complex.toFixed(2)}</td>
            <td>{all.toFixed(2)}</td>
        </tr>;
        usefulPointsTable.push(lasttr);

        let allCount = 0;
        let allValues = 0;
        let questionsInfoTable = questionsInfo.map((obj, index)=> {
            allCount += obj.count;
            allValues += obj.values;
            return <tr>
                <td>{obj.type}</td>
                <td>{obj.count}</td>
                <td>{obj.values}</td>
            </tr>
        });
        let lastquestionsTr = <tr>
            <td>合计</td>
            <td>{allCount}</td>
            <td>{allValues}</td>
        </tr>;
        questionsInfoTable.push(lastquestionsTr);

        return <div id="exam">
            <Menu/>
            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：考核计划查看页</div>
            <div className="container">
                <div id="exam-main" className="row">
                    <div className="col-md-3 ">
                        <span className="tag">专&nbsp;业&nbsp;</span>
                        <select name="ex-profession" id="exan-profession" className="btn-sm">
                            {professionsOption}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <span className="">年&nbsp;级&nbsp;</span>
                        <input type="number" id="level-sel" className="btn-sm" defaultValue="2014"
                        />
                    </div>
                    <div className="col-md-3">
                        <span>学&nbsp;年&nbsp;&nbsp;</span>
                        <select name="year" id="exam-year" className="btn-sm ">
                            <option>{new Date().getFullYear() - 4}-{new Date().getFullYear() - 3}</option>
                            <option>{new Date().getFullYear() - 3}-{new Date().getFullYear() - 2}</option>
                            <option>{new Date().getFullYear() - 2}-{new Date().getFullYear() - 1}</option>
                            <option>{new Date().getFullYear() - 1}-{new Date().getFullYear()}</option>
                            <option>{new Date().getFullYear()}-{new Date().getFullYear() + 1}</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <span>学&nbsp;期&nbsp;&nbsp;</span>
                        <select name="year" id="exam-term" className="btn-sm">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row add">
                    <button className="exam-op col-md-3 btn btn-primary" onClick={this.selectPlans.bind(this)}>
                        查询考试计划
                    </button>
                    <button className="btn btn-primary col-md-1 col-md-offset-7" id="exportButton" onClick={()=> {
                        this.method5('plandata')
                    }}>导出表格
                    </button>

                </div>
                <div className="data" id="tableContent">
                    <table className="table table-bordered" id="plandata">
                        <caption id="tableTitle"></caption>
                        <thead id="tablethead"></thead>
                        <tbody id="tbodyContent">
                        {this.props.examinationPlan.status === 1 ? planTable : ''}
                        {this.props.examinationPlan.status === 2 ? questionsTable : ''}
                        {this.props.examinationPlan.status === 3 ? usefulPointsTable : ''}
                        {this.props.examinationPlan.status === 4 ? questionsInfoTable : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
