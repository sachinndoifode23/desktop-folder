import { incBonus, incByAmt } from "../actions";

function bonusReducer(state={points:0},action){
    switch(action.type){
        case incBonus:
            return { points:state.points + 1};
        case incByAmt:
                return action.payload >= 100 ? { points:state.points + 1} : state;
        default:
                return state;
    }
    
}
export default bonusReducer;