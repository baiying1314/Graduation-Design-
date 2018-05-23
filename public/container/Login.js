import {connect} from "react-redux";
import Login from "../component/Login";

const mapStateToProps = (state)=> {
    return {login:state.login};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        toLogin: (loginInfo)=> {
            dispatch({type:'LOGIN',loginInfo})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
