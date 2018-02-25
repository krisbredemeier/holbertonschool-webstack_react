export default function(state={}, action) {
  switch(action.type){
    case "INIT_CURRICULUM":
      return {
        curriculum: [action.curriculum]
      }
  default:
    return state;
  }
}