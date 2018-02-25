export default function(state={}, action) {
  switch(action.type){
    case "FETCHING":
      return {
        fetching: [action.fetching]
      }
      case "RECIEVED_REPOS":
        return {
          fetching: [action.fetching]
          repos: [action.repos]
        }
      case "RECIEVE_COMMITS":
        return {
          fetching: [action.fetching]
          commits: [action.commits]
        }
  default:
    return state;
  }
}
