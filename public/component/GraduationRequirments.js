import React, {Component} from "react";
import {render} from "react-dom";
import Menu from "./Menu"


export default class GraduationRequirements extends Component {
    componentWillMount() {
        this.props.getAllProfessions();

    }

    createOption() {
        const professionsArr = this.props.graduationRequirment.professions;
        const professionsOption = professionsArr.map((profession, index)=> {
            return <option key={index} value={profession}>{profession}</option>

        });
        return professionsOption;
    }

    addSelectOption(dataArr, selectDom) {
        dataArr.forEach((obj, index)=> {
            const DomNode = document.createElement('option');
            DomNode.value = obj;
            DomNode.key = index;
            DomNode.innerHTML = `${obj}`;
            selectDom.insertBefore(DomNode, selectDom[0]);
        })
    }

    turnArr(arr) {
        const uncoArr = new Set(arr);
        return [...uncoArr];
    }

    deleteData(id,point) {
        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        this.props.deleteProfession({deleteInfo: {id,point}, proLevel: {levelVal, professionVal}});
    }

    selectReq() {

        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        if (levelVal && professionVal && professionVal != 'add' && professionVal != 'tip') {
            const thNode = document.getElementById('tableHead');
            thNode.innerHTML = `<tr><th>序号</th><th>毕业要求</th><th>指标点</th></tr>`;
            this.props.getReqPiont({levelVal, professionVal});
        }
        else {
            alert('请正确选择专业和年级！');
        }
    }

    writePoint(e) {
        const pointTd = e.target.parentNode.previousSibling.childNodes[0];
        pointTd.disabled = false;
        console.log(pointTd.disabled);

    }

    changePoint(e, id, oldPoint) {
        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        var newPoint = e.target.parentNode.previousSibling.previousSibling.childNodes[0].value;
        if (newPoint != oldPoint) {
            this.props.changePoint({changeData: {id, newPoint}, proLevel: {levelVal, professionVal}})
        }
        else {
            alert('未发现任何修改！');
        }
    }

    modalReq() {
        var selectedProfession = document.getElementById('pro-sel').value;
        document.getElementById('selectedProfession2').value = selectedProfession;

        var selectedLevel = document.getElementById('level-sel').value;
        document.getElementById('selectedLevel2').value = selectedLevel;
        if (selectedLevel && selectedProfession && selectedProfession != 'add' && selectedProfession != 'tip') {
            $("#modalReq").modal('show');
        }
        else {
            alert('请正确选择专业和年级!');
        }
    }

    addReq() {
        var selectedProfession = document.getElementById('selectedProfession2').value;
        var selectedLevel = document.getElementById('selectedLevel2').value;
        var addReq = document.getElementById('textReq2').value;
        var addPoint = document.getElementById('textPoint2').value;
        var points = addPoint.split(/[\n]/g);
        if (selectedProfession && selectedLevel && addReq && addPoint && points.length > 0) {
            var objArr = {selectedProfession, selectedLevel, addReq, points};
            this.props.addRequirment(objArr);
        }
        else {
            alert('请输入完整信息!');
        }
    }

    modalPoint() {
        if (this.props.graduationRequirment.selectedDatas.length < 1) {
            alert('没有可选择的毕业要求,请先查询毕业要求或重新选择专业年级');
        }
        else {
            var selectedProfession = document.getElementById('pro-sel').value;
            document.getElementById('selectedProfession3').value = selectedProfession;
            var selectedLevel = document.getElementById('level-sel').value;
            document.getElementById('selectedLevel3').value = selectedLevel;

            const selectedDatas = this.props.graduationRequirment.selectedDatas;
            var reqs = selectedDatas.map((obj, index)=> {
                return obj.gra_requirements;
            });
            var selectNode = document.getElementById('textReq3');
            var reqArr = this.turnArr(reqs);
            this.addSelectOption(reqArr, selectNode);
            $("#modalPoint").modal('show');
        }
    }

    addPoint() {
        var selectedProfession = document.getElementById('selectedProfession3').value;
        var selectedLevel = document.getElementById('selectedLevel3').value;
        var addReq = document.getElementById('textReq3').value;
        var addPoint = document.getElementById('textPoint3').value;
        var points = addPoint.split(/[\n]/g);
        if (selectedProfession && selectedLevel && addReq && addPoint && points.length > 0) {
            var objArr = {selectedProfession, selectedLevel, addReq, points};
            this.props.addPoint(objArr);
        }
        else {
            alert('请输入完整信息!');
        }
    }

    modalProfession() {
        $("#professionModal").modal('show')
    }

    addProfession() {
        var selectedProfession = document.getElementById('selectedProfession1').value;
        var selectedLevel = document.getElementById('selectedLevel1').value;
        var addReq = document.getElementById('textReq1').value;
        var addPoint = document.getElementById('textPoint1').value;
        var points = addPoint.split(/[\n]/g);
        if (selectedProfession && selectedLevel && addReq && addPoint && points.length > 0) {
            var objArr = {selectedProfession, selectedLevel, addReq, points};
            this.props.addProfession(objArr);
        }
        else {
            alert('请输入完整信息!');
        }
    }

    render() {
        const professions = this.createOption();
        const selectedDatas = this.props.graduationRequirment.selectedDatas;
        const reqPiontsNode = selectedDatas.map((obj, index)=> {
            const pointsArr = obj.index_point.map((item, index)=> {
                return <tr>
                    <td><input type="text" disabled="true" defaultValue={item}/></td>
                    <td  className="opdelete">
                        <button onClick={this.deleteData.bind(this, obj._id,item)}>刪除</button>
                    </td>
                </tr>
            });
            return <tr key={index}>
                <td className="num">{selectedDatas.indexOf(obj) + 1}</td>
                <td className="req" >{obj.gra_requirements}</td>
                <td className="op">{pointsArr}</td>
            </tr>
        });

        return <div id="gr">
            <Menu/>

            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：毕业要求管理页</div>
            <div className="container">
                <div id="gr-main" className="row">
                    <div className="col-md-3">
                        <span>专&nbsp;业&nbsp;&nbsp;</span>
                        <select name="pro" id="pro-sel" className="btn-sm">
                            {professions}
                        </select>
                    </div>
                    <div className="col-md-3 ">
                        <span>年&nbsp;级&nbsp;&nbsp;</span>
                        <input type="number" id="level-sel" className="btn-sm" defaultValue="2014" placeholder="输入年级"/>
                    </div>

                </div>
                <div className="row add">
                    <button className=" btn-sm btn-primary col-md-2" onClick={this.selectReq.bind(this)}>查询毕业要求指标点
                    </button>
                    <button className=" col-md-2 col-md-offset-1 btn-sm btn-primary"
                            onClick={this.modalProfession.bind(this)}>
                        增加专业
                    </button>
                    <button className=" col-md-2 col-md-offset-1 btn-sm btn-primary" onClick={this.modalReq.bind(this)}>
                        增加毕业要求
                    </button>
                    <button className=" col-md-2 col-md-offset-1 btn-sm btn-primary"
                            onClick={this.modalPoint.bind(this)}>
                        增加指标点
                    </button>
                </div>

                <div className="data">
                    <table className="table table-bordered" id="tabledata">
                        <thead id="tableHead"></thead>
                        <tbody>
                        {reqPiontsNode}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade bs-example-modal-lg" id="modalReq" ref='modal' role="dialog" data-toggle="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">增加毕业要求</h4>
                        </div>
                        <div className="">
                            <div className="info input-group">
                                <label className="input-group-addon">专业</label><input id="selectedProfession2"
                                                                                      disabled="true"
                                                                                      className="form-control"/></div>
                            <div className="info input-group"><label className="input-group-addon">年级</label><input
                                id='selectedLevel2' disabled="true" className="form-control"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">增加毕业要求</label>
                                <textarea cols="60" rows="5"
                                          id="textReq2" className="form-control" placeholder="请输入一条"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">对应的指标点</label>
                                <textarea cols="60" rows="5"
                                          id="textPoint2" className="form-control" placeholder="若输入多条请换行输入"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="flag">
                                {this.props.graduationRequirment.addReqResult.isSuccess === true ? 'success' : ""}
                                {this.props.graduationRequirment.addReqResult.isSuccess === false ? 'fail' : ""}
                            </div>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary" id="sureReq"
                                    onClick={this.addReq.bind(this)}>确认增加
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade bs-example-modal-lg" id="modalPoint" ref='modal' role="dialog"
                 data-toggle="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">增加指标点</h4>
                        </div>
                        <div className="">
                            <div className="info input-group">
                                <label className="input-group-addon">专业</label><input id="selectedProfession3"
                                                                                      disabled="true"
                                                                                      className="form-control"/></div>
                            <div className="info input-group"><label className="input-group-addon">年级</label><input
                                id='selectedLevel3' disabled="true" className="form-control"/>
                            </div>
                            <div className="info input-group">
                                <label className="input-group-addon">选择毕业要求</label><select id="textReq3"
                                                                                           className="btn form-control">
                            </select>
                            </div>
                            <div className="info input-group">
                                <label className="input-group-addon">输入增加的指标点</label>
                                <textarea name="" id="textPoint3" cols="60" rows="5"
                                          placeholder="若输入多条请换行输入"></textarea>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <div className="flag">
                                {this.props.graduationRequirment.addPointResult.isSuccess === true ? 'success' : ""}
                                {this.props.graduationRequirment.addPointResult.isSuccess === false ? 'fail' : ""}
                            </div>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary" id="sureReq"
                                    onClick={this.addPoint.bind(this)}>确认增加
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade bs-example-modal-lg" id="professionModal" ref='modal' role="dialog"
                 data-toggle="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">增加专业</h4>
                        </div>
                        <div className="">
                            <div className="info input-group">
                                <label className="input-group-addon">增加专业</label>
                                <input id="selectedProfession1" className="form-control" placeholder="请输入专业名称"/>
                            </div>
                            <div className="info input-group">
                                <label className="input-group-addon">选择年级</label>
                                <input type="number" id="selectedLevel1" className="form-control" defaultValue="2014"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">增加毕业要求</label>
                                <textarea cols="60" rows="5"
                                          id="textReq1" className="form-control" placeholder="请输入一条"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">对应的指标点</label>
                                <textarea cols="60" rows="5"
                                          id="textPoint1" className="form-control" placeholder="若输入多条请换行输入"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="flag" id="proflag">
                                {this.props.graduationRequirment.addProfessionResult.isSuccess === true ? 'success' : ""}
                                {this.props.graduationRequirment.addProfessionResult.isSuccess === false ? 'fail' : ""}
                            </div>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary" id="sureReq"
                                    onClick={this.addProfession.bind(this)}>确认增加
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}