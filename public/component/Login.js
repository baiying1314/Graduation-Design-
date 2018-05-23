import React, {Component} from "react";
import {render} from "react-dom";

export default class Login extends Component {
    login() {
        const password = this.refs.psw.value;
        const username = this.refs.input.value;

        $("#tip1").text("");
        $("#tip").text("");
        if (password == ""||username=="") {
            $("#tip1").text("请输入用户名和密码！");
        }
        else {
            this.props.toLogin({username, password});
        }

    }

    toMainPage(){
        window.location.href = '/home'
    }

    render() {
        console.log(this.props.login);
        return <div>
            <div className="row content1">
                <div　 className="col-md-6"　><h1>毕业要求达成度系统登录页</h1></div>
                <div className=" col-md-2 col-md-offset-5 "><img className="userImg"
                                                                 src="../style/images/loginUserImg.png" alt=""/></div>

                <div className="kuandu col-md-4 col-md-offset-4" id="inputGroup">
                    <input type="text" className="form-control input" id="img" ref="input" placeholder="用户名"/>
                    <span id="tip"></span><br/>
                    <input type="password" className="form-control input" id="img2" ref="psw" placeholder="密码"/>
                    <span id="tip1"></span><br/>
                    {this.props.login.isSuccess === false ? '用户名或密码错误' : ''}
                    {this.props.login.isSuccess === true ? this.toMainPage(): ''}
                    <br/>
                    <br />
                    <button className="btn btn-default form-control" onClick={this.login.bind(this)}>登 陆</button>
                    <a href="/register">没有账号请前往注册</a>
                </div>
            </div>

        </div>

    }
}
