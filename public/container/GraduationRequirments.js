import {connect} from "react-redux";
import GraduationRequirements from "../component/GraduationRequirments";

const mapStateToProps = (state)=> {
    return {graduationRequirment: state.graduationRequirment}
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getAllProfessions: ()=> {
            dispatch({type: "GETPROFESSIONS"})
        },
        getReqPiont: (proLevel)=> {
         dispatch({type:"GETREQPOINT",proLevel})
        },
        changePoint:(changeInfo)=>{
            dispatch({type:"CHANGEPOINT",changeInfo})
        },
        deleteProfession: (deleteInfo)=> {
            dispatch({type: "DELETEPROFESSION", deleteInfo})
        },
        addRequirment:(addReqInfo)=>{
            dispatch({type:"ADDREQ",addReqInfo})
        },
        addProfession:(addReqInfo)=>{
            dispatch({type:"ADDPRO",addReqInfo})
        },
        addPoint:(addReqInfo)=>{
            dispatch({type:"ADDPOINT",addReqInfo})
        },
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(GraduationRequirements)
