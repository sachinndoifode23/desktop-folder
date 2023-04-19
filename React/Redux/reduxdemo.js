console.log("redux working");

import axios from "axios";
import { createStore,applyMiddleware ,combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action creator names
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const incBonus = 'bonus/increment';
// const init = 'init';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulfilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';



//store 
const store = createStore(combineReducers({
    account:accountReducer,
    bonus:bonusReducer
}),applyMiddleware(logger.default,thunk.default));

//history
const history = [];



//reducer
function accountReducer(state={amount:1},action){
    switch(action.type){
        case getAccUserPending:
            return { ...state, pending:true };
        case getAccUserFulfilled:
            return { amount:action.payload, pending:false };
        case getAccUserRejected:
            return { ...state, error:action.payload, pending:false };
        case inc:
            return { amount:state.amount + 1};
        case dec:
            return { amount:state.amount - 1};
        case incByAmt:
            return { amount:state.amount + action.payload};
        default:
                return state;
    }
    
}
function bonusReducer(state={points:0},action){
    switch(action.type){
        case incBonus:
            return { points:state.points + 1};
        case incByAmt:
            if(action.payload >= 100){
                return { points:state.points + 1};
            }
        default:
                return state;
    }
    
}

//global state
// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history);
// })
// console.log(store.getState());

// store.dispatch({type:'increment'});
// console.log(store.getState());

//async API call

// async function  getUser(){
//  const {data} = await axios.get('http://localhost:8080/accounts/1');
//  console.log(data);
// }
// getUser();


//Action Creators
 function  getUser(id){
    return async (dispatch,getState)=>{
        try{
            dispatch(getAccountUserPending());
            const {data} = await axios.get('http://localhost:8080/accounts/'+id);
            dispatch(getAccountUserFulfilled(data.amount));
        }catch(error){
            console.log(error.message)
            dispatch(getAccountUserRejected(error.message));
        }
        
    }
}
    
function getAccountUserFulfilled(arg){
    return { type:getAccUserFulfilled, payload:arg }
}
function getAccountUserPending(arg){
    return { type:getAccUserPending }
}
function getAccountUserRejected(arg){
    return { type:getAccUserRejected, payload:arg }
}
function incrementBonus(){
    return {type : incBonus}
}
function increment(){
    return {type : inc}
}
function decrement(){
    return {type : dec}
}
function incrementByAmount(arg){
    return {type : incByAmt,payload: arg};
}

setTimeout(()=>{
    store.dispatch(getUser(1));
},2000)
