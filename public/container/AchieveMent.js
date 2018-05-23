import {connect} from "react-redux";
import Achievement from "../component/Achievement";

const mapStateToProps = (state)=> {
    return {achievement:state.achievement};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getAllPlans: ()=> {
            dispatch({type:'GETALLPLANS'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievement)
