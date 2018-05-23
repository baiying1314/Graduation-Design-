import React, {Component} from "react";
import {render} from "react-dom";
import Menu from "./Menu";

export default class AchieveMent extends Component {
    componentWillMount() {
        this.props.getAllPlans();
    }

    calculate(obj) {
        let captionContent = document.getElementById('cap');
        captionContent.innerHTML = `${obj.profession}专业${obj.level}级${obj.year}学年第${obj.term}学期${obj.course}达成度`;
        let tableBody = document.getElementById('calbody');
        let thNode = document.getElementById('calth');
        thNode.innerHTML = '';
        let usefulPoints = obj.usefulPoints;
        let col = usefulPoints.length;
        for (let i = 0; i < col + 3; i++) {
            let tdNode1 = document.createElement('th');
            let tdNode2 = document.createElement('th');
            if (i == 0) {

                tdNode1.innerHTML = `大题号`;
                thNode.appendChild(tdNode1);
            }
            else if (i == 1) {

                tdNode1.innerHTML = `小题号`;
                thNode.appendChild(tdNode1);

            }
            else if (i == 2) {

                tdNode1.innerHTML = `赋分`;
                thNode.appendChild(tdNode1);

            }
            else {
                console.log(usefulPoints[i]);
                tdNode1.innerHTML = `指标点${i - 2}${usefulPoints[i - 3].point}应得分(权重：${usefulPoints[i - 3].weight})`;
                tdNode2.innerHTML = `指标点${i - 2}${usefulPoints[i - 3].point}学生平均得分`;
                thNode.appendChild(tdNode1);
                thNode.appendChild(tdNode2);
            }
        }
        var tableContent = obj.questions.map((question, index)=> {
            var valuesContent = question.pointsGrade.map((pointValue, index)=> {
                console.log(index);
                return `<td>${pointValue.grade}</td><td><input type="text" name=${index}></td>`
            });
            valuesContent = valuesContent.join("");
            return `<tr><td>${question.big}</td><td>${question.small}</td><td>${question.values}</td>${valuesContent}</tr>`
        });
        tableContent = tableContent.join("");
        tableBody.innerHTML = `${tableContent}`;
        var buttonCal = document.createElement('button');
        buttonCal.innerHTML = '计算达成度';
        tableBody.appendChild(buttonCal);
        buttonCal.onclick = ()=> {
            this.calculateGrade(obj)
        }
    }

    calculateGrade(obj) {
        let tableBody = document.getElementById('calbody');
        let lasttr1 = document.createElement('tr');
        let lasttr2 = document.createElement('tr');

        var sumGrade = obj.questions.reduce((one, two)=> {
            return one.values + two.values;
        });
        console.log(sumGrade);

        var pointValues = obj.usefulPoints.map((item, index)=> {
            return item.basis + item.complex_application + item.simple_application;
        });

        var getValues = obj.usefulPoints.map((item, index)=> {
            var nodeList = document.getElementsByName(index);
            var nodeArry = Array.from(nodeList);
            var value = nodeArry.reduce((one, two)=> {

                    return parseFloat(one.value) + parseFloat(two.value);

            });
            return value;
        });
       // var ifRight= getValues.every((item)=> {
       //     return item;
       //      });

        // if(ifRight){
            for (let i = 0; i < obj.usefulPoints.length + 3; i++) {
                let tdNode1 = document.createElement('td');
                let tdNode2 = document.createElement('td');
                let tdNode3 = document.createElement('td');
                let tdNode4 = document.createElement('td');
                if (i == 0) {
                    tdNode1.innerHTML = '合计';
                    tdNode3.innerHTML = '目标达成度';
                    lasttr1.appendChild(tdNode1);
                    lasttr2.appendChild(tdNode3);
                }
                else if (i == 1) {
                    tdNode1.innerHTML = '';
                    lasttr1.appendChild(tdNode1);
                    tdNode3.innerHTML = '';
                    lasttr2.appendChild(tdNode3);

                }
                else if (i == 2) {
                    tdNode1.innerHTML = sumGrade;
                    lasttr1.appendChild(tdNode1);
                    tdNode3.innerHTML = '';
                    lasttr2.appendChild(tdNode3);

                }
                else {
                    tdNode1.innerHTML = pointValues[i - 3];
                    tdNode2.innerHTML = getValues[i - 3];
                    tdNode3.innerHTML = `${getValues[i - 3]}/${pointValues[i - 3]}*${obj.usefulPoints[i - 3].weight}=${((getValues[i - 3] / pointValues[i - 3]) * obj.usefulPoints[i - 3].weight).toFixed(3)}`;
                    tdNode4.innerHTML = '';
                    lasttr1.appendChild(tdNode1);
                    lasttr1.appendChild(tdNode2);
                    lasttr2.appendChild(tdNode3);
                    lasttr2.appendChild(tdNode4);
                }
            }
            tableBody.insertBefore(lasttr1, tableBody.lastElementChild);
            tableBody.insertBefore(lasttr2, tableBody.lastElementChild);
        // }
        // else {
        //     alert('请输入成绩')
        // }
    }

    render() {
        const plansList = this.props.achievement.allPlans.map((obj, index)=> {
            return <div>
                <li>{obj.profession}专业{obj.level}级{obj.year}学年第{obj.term}学期{obj.course}课程考核计划</li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.calculate.bind(this, obj)}>计算成绩达成度</button>
                <br/><br/></div>
        });
        return <div id="achievement">
            <Menu/>
            <span>考核计划列表</span>
            <div id="acAllPlans">
                {plansList}
            </div>
            <div>
                <table id="cal" className="table table-border">
                    <caption id="cap"></caption>
                    <thead id="calHead">
                    <tr id="calth"></tr>
                    </thead>
                    <tbody id="calbody"></tbody>
                </table>

            </div>
        </div>
    }
}
