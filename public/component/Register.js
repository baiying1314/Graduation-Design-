import React, {Component} from "react";
import {render} from "react-dom";

export default class Register extends Component {
    register() {
        const password = this.refs.psw.value;
        const surePassword = this.refs.spsw.value;
        const username = this.refs.input.value;
        if (password != surePassword) {
            $("#tip1").text("");
            $("#tip1").text("两次输入密码不一致，请重新输入！");

        }

        else if (password == "" || surePassword == "" || username == "") {
            $("#tip1").text("");
            $("#tip1").text("请输入用户名和密码！");
        }
        else {
            $("#tip1").text("");
            this.props.toRegister({username, password});
        }

    }

    toLoginPage() {
        window.location.href = '/login';
    }

    render() {
        return <div>
            <div className="row content1">
                <div className=" col-md-6 "><h1>毕业要求达成度系统注册页</h1></div>
                <div className=" col-md-2 col-md-offset-5 "><img className="userImg"
                                                                 src="../style/images/registerUser.png" alt=""/></div>

                <div className="kuandu col-md-4 col-md-offset-4" id="inputGroup">
                    <input type="text" className="form-control input" id="img" ref="input" placeholder="用户名"/>
                    <span id="tip"></span><br/>
                    <input type="password" className="form-control input" id="img2" ref="psw" placeholder="密码"/><br/>
                    <input type="surepassword" className="form-control input" ref="spsw" placeholder="确认密码"/>
                    <br/>
                    <button className="btn btn-default form-control" onClick={this.register.bind(this)}>注 册</button>
                    <span id="tip1">{this.props.register.isSuccess === false ? "注册失败,用户名可能已经存在" : ""}
</span><br/>
                    <a href="/login">已注册过请前往登录</a>
                    {this.props.register.isSuccess === true ? this.toLoginPage() : '' }
                </div>
            </div>

        </div>

    }
}
