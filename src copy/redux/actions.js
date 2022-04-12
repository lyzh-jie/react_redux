import * as actions from './action-types'
export const handleadd = num => ({type:actions.handleadd,data:num});
export const handledecrement = num => ({type:actions.handledecrement,data:num})
export const handleasync = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch(handleadd(num))
    },100)
  }
}