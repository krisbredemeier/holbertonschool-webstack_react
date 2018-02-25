import fetch from 'cross-fetch'

export const FETCH_REPOS = 'FETCH_REPOS'
function fetchRepos() {
  return {
    type: FETCHING,
    fetching: true
  }
}

export const FETCH_COMMITS = 'FETCH_COMMITS'
function rfetchCommits(repo) {
  return {
    type: FETCHING,
    fetching: true
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchRepos() {
   return function (dispatch) {
      dispatch(fetchRepos())
      return fetch(`https://api.github.com/users/krisbredemeier/repos`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
     )
     .then(json =>
       dispatch(fetchRepos())
     )
 }
}

export function fetchCommits(repo) {
   return function (dispatch) {
      dispatch(fetchCommits())
      return fetch(`https://api.github.com/users/krisbredemeier/${repo}/commits`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
     )
     .then(json =>
       dispatch(fetchCommits())
     )
 }
}
