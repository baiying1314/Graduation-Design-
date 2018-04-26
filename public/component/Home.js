import React, {Component} from "react";
import {render} from "react-dom";

export default class Main extends Component {
    render() {
        return <div id="home">
            <div className="dingwei"><img src="../style/images/dingwei.png" alt=""/>当前位置：系统首页</div>

            <div className="container">
                <ul id="slide">
                    <li id="first">
                        <img src="../style/images/download.png" alt=""/>
                    </li>
                    <li id="second">
                        <img src="../style/images/renzheng3.jpg" alt=""/>
                    </li>
                    <li id="third">
                        <img src="../style/images/renzheng4.jpg" alt=""/>
                    </li>
                </ul>

                <p>
                    本系统响应工程教育认证的思想供高校教师使用,使用此系统可以便利的管理学生的毕业要求以及课程考核.
                    工程教育认证的产生和发展与工程教育的改革与发展之间存在着必然的、密不可分的联系,对这种联系的分析研究对加强和促进二者之间的关联性和改革发展具有重要的意义。本文分别从工程教育认证与教育教学理念改变、工程人才培养标准化、工程专业培养目标制订、工程专业培养标准、工程教育质量持续改进、专业课程体系改革以及工科教师队伍建设等七个方面讨论工程教育认证与工程教育教学改革和发展之间的关系,以为二者之间的相互促进,尤其是为后者的改革和发展提供借鉴。
                </p>
            </div>
        </div>
    }
}
