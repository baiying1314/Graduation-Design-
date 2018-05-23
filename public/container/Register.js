import {connect} from "react-redux";
import Register from "../component/Register";

const mapStateToProps = (state)=> {
    return {register:state.register};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        toRegister: (registerInfo)=> {
            dispatch({type:'REGISTER',registerInfo})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register)

