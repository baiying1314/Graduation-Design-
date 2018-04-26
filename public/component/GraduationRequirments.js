import React, {Component} from "react";
import {render} from "react-dom";

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

    deleteData(id) {
        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        this.props.deleteProfession({id, proLevel: {levelVal, professionVal}});
    }

    selectReq() {
        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        if (levelVal && professionVal && professionVal != 'add') {
            this.props.getReqPiont({levelVal, professionVal});
        }
        else {
            alert('请正确选择专业和年级！');
        }
    }

    writePoint(e) {
        const pointTd = e.target.parentNode.previousSibling.childNodes[0];
        pointTd.disabled = false;

    }

    changePoint(id, oldPoint) {
        const levelVal = document.getElementById('level-sel').value;
        const professionVal = document.getElementById('pro-sel').value;
        this.props.changePoint({changeData: {id, oldPoint}, proLevel: {levelVal, professionVal}})
    }

    modalReq() {
        var selectedProfession = document.getElementById('pro-sel').value;
        document.getElementById('selectedProfession').value = selectedProfession;

        var selectedLevel = document.getElementById('level-sel').value;
        document.getElementById('selectedLevel').value = selectedLevel;
        $("#modalReq").modal('show');
    }

    addReq() {
        var selectedProfession = document.getElementById('pro-sel').value;
        var selectedLevel = document.getElementById('level-sel').value;
        var addReq = document.getElementById('textReq').value;
        var addPoint = document.getElementById('textPoint').value;
        const arr = addPoint.split(/[\n]/g);
        const objArr = arr.map((obj, index)=> {
            return {selectedProfession, selectedLevel, addReq, point: obj}
        });
        this.props.addRequirment(objArr);
    }

    modalPoint() {
        var selectedProfession = document.getElementById('pro-sel').value;
        document.getElementById('p-selectedProfession').value = selectedProfession;

        var selectedLevel = document.getElementById('level-sel').value;
        document.getElementById('p-selectedLevel').value = selectedLevel;

        const selectedDatas = this.props.graduationRequirment.selectedDatas;
        var reqs = selectedDatas.map((obj, index)=> {
            return obj.gra_requirements;
        });
        var selectNode = document.getElementById('p-selectedReq');
        var reqArr = this.turnArr(reqs);
        this.addSelectOption(reqArr, selectNode);
        $("#modalPoint").modal('show');
    }

    addPoint() {
        var selectedProfession = document.getElementById('pro-sel').value;
        var selectedLevel = document.getElementById('level-sel').value;
        var addReq = document.getElementById('p-selectedReq').value;
        var addPoint = document.getElementById('p-textPoint').value;
        const arr = addPoint.split(/[\n]/g);
        const objArr = arr.map((obj, index)=> {
            return {selectedProfession, selectedLevel, addReq, point: obj}
        });
        if (addPoint && addPoint != '') {
            this.props.addRequirment(objArr);
        }
        else {
            alert('请输入指标点！');
        }
    }

    inputProfession() {
        var selectedProfession = document.getElementById('pro-sel').value;
        if (selectedProfession === 'add') {
            $("#professionModal").modal('show')
        }
    }

    addProfession() {
        var professionName = document.getElementById('professionName').value;
        if (professionName && professionName != '') {
            this.props.addProfession({professionName});
        }
        else {
            alert('请输入专业名称!');
        }
    }

    render() {
        const professions = this.createOption();
        const selectedDatas = this.props.graduationRequirment.selectedDatas;
        const reqPiontsNode = selectedDatas.map((obj, index)=> {
            return <tr key={index}>
                <td>{obj.gra_requirements}</td>
                <td><input type="text" id="inputPoint" defaultValue={obj.index_point} disabled="true"/></td>
                <td>
                    <button onClick={this.writePoint}>编辑</button>
                </td>
                <td>
                    <button onClick={this.changePoint.bind(this, obj.profession_level_id, obj.index_point)}>确认修改
                    </button>
                </td>
                <td>
                    <button onClick={this.deleteData.bind(this, obj.profession_level_id)}>刪除</button>
                </td>
            </tr>
        });

        return <div id="gr">
            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：毕业要求管理页</div>
            <div className="container">
                <div id="gr-main" className="row">

                    <select name="pro" id="pro-sel" className="col-md-3 btn" onChange={this.inputProfession.bind(this)}>
                        <option value="tip" hidden="hidden" selected="selected">
                            请选择专业
                        </option>
                        {professions}
                        <option value="add" id="add">增加其他专业</option>
                    </select>
                    <div className="col-md-5 col-md-offset-1">
                        <span className="btn">年级</span>
                        <input type="number" id="level-sel" className="btn" defaultValue="2014" placeholder="输入年级"
                        />
                    </div>

                    <button className="btn col-md-2 col-md-offset-1" onClick={this.selectReq.bind(this)}>查询</button>


                </div>
                <div className="data">
                    <table className="table table-hover">
                        <tbody>
                        {reqPiontsNode}
                        </tbody>
                    </table>
                    <button className="addright btn btn-primary" onClick={this.modalReq.bind(this)}>增加毕业要求</button>
                    <button className="addright btn btn-primary" onClick={this.modalPoint.bind(this)}>增加指标点</button>
                </div>
            </div>
            <div className="modal fade bs-example-modal-lg" id="modalReq" ref='modal' role="dialog" data-toggle="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">增加指标点</h4>
                        </div>
                        <div className="">
                            <div className="info input-group">
                                <label className="input-group-addon">专业</label><input id="selectedProfession"
                                                                                      disabled="true"
                                                                                      className="form-control"/></div>
                            <div className="info input-group"><label className="input-group-addon">年级</label><input
                                id='selectedLevel' disabled="true" className="form-control"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">增加毕业要求</label>
                                <textarea cols="60" rows="5"
                                          id="textReq" className="form-control" placeholder="请输入一条"/>
                            </div>
                            <div className="info input-group"><label className="input-group-addon">对应的指标点</label>
                                <textarea cols="60" rows="5"
                                          id="textPoint" className="form-control" placeholder="若输入多条请以；分隔"/>
                            </div>
                        </div>
                        <div className="modal-footer">
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
                                <label className="input-group-addon">专业</label><input id="p-selectedProfession"
                                                                                      disabled="true"
                                                                                      className="form-control"/></div>
                            <div className="info input-group"><label className="input-group-addon">年级</label><input
                                id='p-selectedLevel' disabled="true" className="form-control"/>
                            </div>
                            <div className="info input-group">
                                <label className="input-group-addon">选择毕业要求</label><select id="p-selectedReq"
                                                                                           className="btn form-control">
                            </select>
                            </div>
                            <div className="info input-group">
                                <label className="input-group-addon">输入增加的指标点</label>
                                <textarea name="" id="p-textPoint" cols="60" rows="5"
                                          placeholder="若增加多条请以；分隔"></textarea>
                            </div>

                        </div>
                        <div className="modal-footer">
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
                                <input id="professionName" className="form-control" placeholder="请输入专业名称"/></div>
                        </div>
                        <div className="modal-footer">
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