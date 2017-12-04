
const initalState = {
  values: 0
}
export default function(state = initalState, action) {
  switch(action.type) {
    case "UPDATE":
      return {
      ...state,
    values: state.value == 0 ? [action.number] : [state.values, action.number],
    }
  default:
    return state;
  }
}
