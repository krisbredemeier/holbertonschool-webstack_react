import fetch from 'cross-fetch'

export const FETCH_REPOS = 'FETCH_REPOS'
function fetchRepos(repos) {
  return {
    type: FETCHING,
    fetching: true
  }
}

export const RECIEVE_REPOS = 'RECIEVE_REPOS'
function recieveRepos(repos) {
  return {
    type: RECIEVED_REPOS,
    fetching: false,
    repos: repos
  }
}

export const FETCH_COMMITS = 'FETCH_COMMITS'
function rfetchCommits(repos, json) {
  return {
    type: FETCHING,
    fetching: true
  }
}

export const RECIEVE_COMMITS = 'RECIEVE_COMMITS'
function recieveCommits(repos, json) {
  return {
    type: RECIEVED_COMMITS,
    fetching: false,
    commits: commits
  }
}

export function fetchRepos(repos) {
   return function (dispatch) {
      dispatch(fetchRepos(repos))
      return fetch(`https://api.github.com/users/krisbredemeier/${repos}.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
     )
     .then(repos =>
       dispatch(recieveRepos(repos, json))
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
     .then(commits =>
       dispatch(recieveCommits())
     )
 }
}
