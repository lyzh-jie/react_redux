import {handleadd,handledecrement} from './action-types'
export function counter(state=0,action) {
  console.log('counter',state,action);
  switch (action.type){
    case handleadd:
      return state + action.data
    case handledecrement:
      return state - action.data
    default:
      return state
  }
}