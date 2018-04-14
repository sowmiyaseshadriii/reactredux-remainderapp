import { ADD_REMAINDER } from '../constants';
import { DELETE_REMAINDER } from '../constants';
import { CLEAR_REMAINDERS } from '../constants';
export const addRemainder=(text, dueDate)=>{
    const action={
        type:ADD_REMAINDER,
        text,
        dueDate
    }
    console.log('action in addRemiander',action);
    return action;
}

export const deleteRemainder=(id)=>{
   const action={
     type:DELETE_REMAINDER,
     id
   }
   console.log('deleting actions', action);
   return action;
}


export const clearRemainders=()=>{
   return{
       type:CLEAR_REMAINDERS
   }
}