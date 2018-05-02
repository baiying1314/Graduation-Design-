import React, {Component} from "react";
import {render} from "react-dom";

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
        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        if (profession && level && year && term) {
            const tablethead = document.getElementById('tablethead');
            tablethead.innerHTML = `<th>课程</th>
            <th>开课单位</th>
            <th>计划学时</th>
            <th>命名教师</th>
            <th>预估平均成绩</th>
            <th>命题日期</th>
            <th>考试时间</th>
            <th>是否ＡＢ卷</th>
            <th>考试方式</th>`;

            this.props.selectPlans({profession, level, year, term});
        }
        else {
            alert('请选择查询信息！');
        }

    }

    createPlan() {
        window.location.href = "/examinationPlanInfo";
    }


    selectPlanDetils(course, id) {
        const profession = document.getElementById('exan-profession').value;
        const level = document.getElementById('level-sel').value;
        const year = document.getElementById('exam-year').value;
        const term = document.getElementById('exam-term').value;
        const tablethead = document.getElementById('tablethead');
        tablethead.innerHTML = `<th>大题号</th>
            <th>小题号</th>
            <th>赋分</th>
            <th>平均得分</th>
            <th>层次</th>
            <th>内容</th>
            <th>题型</th>
            <th>支撑指标点</th> `;
        var tableParent = document.getElementById('tableContent');
        var exportButton = document.createElement('button');
        exportButton.innerHTML = '导出';
        exportButton.className = 'btn col-md-1 col-md-offset-11';
        tableParent.insertBefore(exportButton, tableParent.childNodes[0]);
        exportButton.onclick = ()=> {
            this.method5('plandata');
        };

        const tableTitle = document.getElementById('tableTitle');
        tableTitle.innerHTML = ` 试题与毕业要求支撑关系表(${profession}${level}级${year}学年第${term}学期${course})`;

        this.props.selectPlanDetils({id});
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
        console.log(profession, level, year, term);
        if (profession && level && year && term) {
            this.props.deletePlan({deleteId, selectInfo: {profession, level, year, term}});
        }
        else {
            alert('请选择查询信息！');
        }
    }

    pre() {

    }

    render() {
        const professionsOption = this.createOption();
        const plans = this.props.examinationPlan.plans;
        const detils = this.props.examinationPlan.planDetils;
        const planTable = plans.map((obj, index)=> {
            return <tr key={index}>
                <td>{obj.course}</td>
                <td>{obj.school}</td>
                <td>{obj.long}</td>
                <td>{obj.teacher}</td>
                <td>{obj.hopeGrade}</td>
                <td>{obj.date}</td>
                <td>{obj.examTime}</td>
                <td>{obj.AB}</td>
                <td>{obj.rule}</td>
                <td>
                    <button onClick={this.selectPlanDetils.bind(this, obj.course, obj.id)}>查看</button>
                </td>
                <td>
                    <button>修改</button>
                </td>
                <td>
                    <button onClick={this.deletePlan.bind(this, obj.id)}>删除</button>
                </td>
            </tr>
        });

        const detilsTable = detils.map((obj, index)=> {
            const point = obj.points.map((obj, index)=> {
                return <td>{obj.point}({obj.grade}分)</td>


            });

            return <tr rowSpan={obj.pointNum} key={index}>
                <td>{obj.big}</td>
                <td>{obj.small}</td>
                <td>{obj.grade}</td>
                <td>{obj.avr}</td>
                <td>{obj.cengci}</td>
                <td>{obj.content}</td>
                <td>{obj.type}</td>
                <td>{point}</td>

            </tr>;
        });
        return <div id="exam">
            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：考核计划管理页</div>
            <div className="container">
                <div id="exam-main" className="row">
                    <select name="ex-profession" id="exan-profession" className="col-md-2 btn">
                        <option value='' hidden="hidden">请选择专业</option>
                        {professionsOption}
                    </select>
                    <div className="col-md-4">
                        <span className="btn">年级</span>
                        <input type="number" id="level-sel" className="btn-sm" defaultValue="2014"
                               placeholder="输入年级"
                        />
                    </div>
                    <select name="year" id="exam-year" className="btn col-md-2 col-md-offset-1">
                        <option value='' hidden="hidden">请选择学年</option>
                        <option value="2017-2018">2017-2018</option>
                        <option value="2016-2017">2016-2017</option>
                    </select>
                    <select name="year" id="exam-term" className="btn col-md-2 col-md-offset-1">
                        <option value='' hidden="hidden">请选择学期</option>
                        <option value="１">１</option>
                        <option value="２">２</option>
                    </select>
                </div>
                <br/>
                <div className="row">
                    <button className="exam-op col-md-5 btn btn-primary" onClick={this.selectPlans.bind(this)}>
                        查询考试计划
                    </button>
                    <button className="exam-op col-md-5 col-md-offset-2 btn btn-primary"
                            onClick={this.createPlan.bind(this)}>创建考试计划
                    </button>
                </div>
                <div className="data" id="tableContent">
                    <table className="table" id="plandata">
                        <caption id="tableTitle"></caption>
                        <thead id="tablethead"></thead>
                        <tbody>
                        {this.props.examinationPlan.status === 1 ? planTable : ''}
                        {this.props.examinationPlan.status === 2 ? detilsTable : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
