const initialState = {
  status: '',
  is_fetching: false
}

export default function(state=initialState, action) {
  switch(action.type){
    case "FETCHING":
      return {
        is_fetching: action.is_fetching,
        status: action.results
      }
    case "RESET":
      return {
        is_fetching: false,
        status: ""
      }
  default:
    return state;
  }
}
