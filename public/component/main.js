import React, {Component} from "react";
import {render} from "react-dom";
// import Menu from './Menu'

export default class Main extends Component {
    render() {
        return <div>

            {this.props.children}
        </div>

    }
}
