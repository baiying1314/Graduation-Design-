import {connect} from "react-redux";
import GraduationRequirements from "../component/GraduationRequirments";

const mapStateToProps = (state)=> {
    return {professions:state.getProfessions}
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getAllProfessions: ()=> {
            dispatch({type: "getAllProfessions"})
        }

    }
};
export default connect(mapStateToProps, mapDispatchToprops)(GraduationRequirements)
