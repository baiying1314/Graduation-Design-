import {connect} from "react-redux";
import ExaminationPlan from "../component/ExaminationPlan";

const mapStateToProps = (state)=> {
    return {examinationPlan: state.examinationPlan}
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getAllProfessions: ()=> {
            dispatch({type: "GETPROFESSIONS"})
        },
        selectPlans: (selectPlanInfo)=> {
            dispatch({type: "SELECTPLAN", selectPlanInfo})
        },
        selectPlanDetils: (selectDetilsInfo)=> {
            dispatch({type: 'SELECTDETILS', selectDetilsInfo})
        },
        deletePlan: (deleteInfo)=> {
            dispatch({type:'DELETEPLAN',deleteInfo})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(ExaminationPlan)
