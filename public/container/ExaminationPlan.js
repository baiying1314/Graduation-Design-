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
        selectPlanDetils1: (selectDetilsInfo)=> {
            dispatch({type: 'SELECTDETILS1', selectDetilsInfo})
        },
        selectPlanDetils2: (selectDetilsInfo)=> {
            dispatch({type: 'SELECTDETILS2', selectDetilsInfo})
        },
        selectPlanDetils3: (selectDetilsInfo)=> {
            dispatch({type: 'SELECTDETILS3', selectDetilsInfo})
        },
        deletePlan: (deleteInfo)=> {
            dispatch({type:'DELETEPLAN',deleteInfo})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(ExaminationPlan)
