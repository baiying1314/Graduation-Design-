import {combineReducers} from "redux";
import graduationRequirment from "./graduationRequirment";
import examinationPlan from "./examinationPlan";
import examinationPlanInfo from "./examinationPlanInfo";
import login from "./login"
import register from "./register"
import achievement from "./achievement"

export default combineReducers({graduationRequirment, examinationPlan, examinationPlanInfo,login,register,achievement});