export default function(state={}, action) {
  switch(action.type){
    case "INIT_CURRICULUMS":
      return {
        curriculum: [action.curriculum]
      }
  default:
    return state;
  }
}