import {combineReducers} from "redux";
import graduationRequirment from "./graduationRequirment";
import examinationPlan from "./examinationPlan";
import examinationPlanInfo from "./examinationPlanInfo";

export default combineReducers({graduationRequirment, examinationPlan, examinationPlanInfo});