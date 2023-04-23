import axios from 'axios'
// action creator names
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const incBonus = 'bonus/increment';
// export const init = 'init';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulfilled = 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';

//Action Creators
export function  getUser(id){
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
    
export function getAccountUserFulfilled(arg){
    return { type:getAccUserFulfilled, payload:arg }
}
export function getAccountUserPending(arg){
    return { type:getAccUserPending }
}
export function getAccountUserRejected(arg){
    return { type:getAccUserRejected, payload:arg }
}
export function incrementBonus(){
    return {type : incBonus}
}
export function increment(){
    return {type : inc}
}
export function decrement(){
    return {type : dec}
}
export function incrementByAmount(arg){
    return {type : incByAmt,payload: arg};
}
