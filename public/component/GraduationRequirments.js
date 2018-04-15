import React, {Component} from "react";
import {render} from "react-dom";

export default class GraduationRequirements extends Component {
    componentWillMount() {
        this.props.getAllProfessions();
    }

    getProffesion() {
        var professionsArr = this.props.professions;
        var professions = professionsArr.map((obj)=> {
            return obj.profession;
        });
        return this.turnArr(professions);
    }

    createOption() {
        var professionsArr = this.getProffesion();
        var professionsOption = professionsArr.map((profession, index)=> {
            return <option key={index} value={profession}>{profession}</option>

        });
        return professionsOption;
    }

    levelSure(professionVal) {
        var professionsArr = this.props.professions;

        var professionFilter = professionsArr.filter((obj)=> {
            return obj.profession == professionVal;
        });

        var gradesArr = professionFilter.map((obj)=> {
            return obj.level;
        });

        var grades = this.turnArr(gradesArr);
        var selectLevel = document.getElementById('grade-sel');
        selectLevel.innerHTML = '<option value="add">增加年级</option>';
        this.addSelectOption(grades, selectLevel);
    }

    reqSure(levelVal) {
        var professionsArr = this.props.professions;

        var professionVal = document.getElementById('pro-sel').value;

        var levelFilter = professionsArr.filter((obj)=> {
            return (obj.level == levelVal && professionVal == obj.profession);
        });

        var reqArr = levelFilter.map((obj, index)=> {
            return obj.gra_requirements;
        });
        var reqs = this.turnArr(reqArr);

        var selectReq = document.getElementById('gr-req');
        selectReq.innerHTML = '<option value="add">增加毕业要求</option>';
        this.addSelectOption(reqs, selectReq);
    }

    pointSure(reqVal) {
        var professionVal = document.getElementById('pro-sel').value;
        var levalVal = document.getElementById('grade-sel').value;
        var professionsArr = this.props.professions;


        var selectPoint = document.getElementById('gr-point');
        selectPoint.innerHTML = '<option value="add">增加指标点</option>'
        var pointFilter = professionsArr.filter((obj, index)=> {
            return (obj.profession == professionVal && obj.level == levalVal && obj.gra_requirements == reqVal)
        });
        var pointArr = pointFilter.map((obj, index)=> {
            return obj.index_point;
        });
        this.addSelectOption(pointArr, selectPoint);

    }

    addSelectOption(dataArr, selectDom) {
        dataArr.forEach((obj, index)=> {
            var DomNode = document.createElement('option');
            DomNode.value = obj;
            DomNode.key = index;
            DomNode.innerHTML = `${obj}`;
            selectDom.insertBefore(DomNode, selectDom[0]);
        })
    }

    turnArr(arr) {
        var uncoArr = new Set(arr);
        return [...uncoArr];
    }

    deleteProfession() {
        var professionVal = document.getElementById('pro-sel').value;
        var levalVal = document.getElementById('grade-sel').value;
        var reqVal = document.getElementById('gr-req').value;
        var pointlVal = document.getElementById('gr-point').value;
        this.props.deleteProfession({professionVal, levalVal, reqVal, pointlVal});
    }

    render() {

        var professions = this.createOption();
        return <div id="gr">
            <div id="gr-title" ref='a'>
                <h1>毕业要求管理</h1>
            </div>
            <div id="gr-in" className="input-group">
                <input type="text" className="form-control" placeholder="请输入专业名称查询对应毕业要求"/>
                <span className="input-group-addon btn btn-default">
                                 <span className="glyphicon glyphicon-search">查询</span>
                            </span>
            </div>
            <div id="gr-main" className="row">

                <select name="pro" id="pro-sel" className="col-md-2  btn" onChange={(e)=> {
                    this.levelSure(e.target.value)
                }}>
                    <option value="tip" hidden="hidden" selected="selected">请选择专业</option>
                    {professions}
                    <option value="add">增加其他专业</option>
                </select>

                <select name="grade" id="grade-sel" className="col-md-2  btn" onChange={(e)=> {
                    this.reqSure(e.target.value)
                }}>
                    <option value="tip" hidden="hidden" selected="selected">请选择年级</option>

                </select>
                <select name="req" id="gr-req" className="col-md-2  btn" onChange={(e)=> {
                    this.pointSure(e.target.value)
                }}>
                    <option value="tip" hidden="hidden" selected="selected">请选择毕业要求</option>

                </select>
                <select name="point" id="gr-point" className="col-md-2  btn">
                    <option value="tip" hidden="hidden" selected="selected">指标点</option>
                </select>
                <button className="btn col-md-1" onClick={this.deleteProfession.bind(this)}>删除</button>
            </div>
        </div>
    }
}