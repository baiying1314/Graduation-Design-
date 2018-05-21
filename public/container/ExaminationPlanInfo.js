import {connect} from "react-redux";
import ExaminationPlanInfo from "../component/ExaminationPlanInfo";

const mapStateToProps = (state)=> {
    return {examinationPlanInfo: state.examinationPlanInfo}
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getAllProfessions: ()=> {
            dispatch({type: "GETPROFESSIONS"})
        },
        getPoints: (proLevel)=> {
            dispatch({type: 'GETPROLEVELPTIONTS', proLevel})
        },
        addCoursePlan:(addPlanInfo)=>{
            dispatch({type:'ADNPLANIINFO',addPlanInfo})
        }

    }
};
export default connect(mapStateToProps, mapDispatchToprops)(ExaminationPlanInfo)
