const mainContainer = document.querySelector(".container")

const applicationState = {
    teams: [],
    players: [],
    teamScores: [],
    state: {}
}

const API = "http://localhost:8088"

export const submitTeamScores = (teamSubmission) => {
    const fetchOptions = {
        method: "POST", //creation request, "please create"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamSubmission)
    }
    return fetch(`${API}/teamScores`,
     fetchOptions) //here's the url i wanna send a request to
        .then(response => response.json()) //when response happens, returns string of json data, string => data structure(response.json)
        .then(() => { //then, do this (alert! things have changed)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchTeams = () => {
    return fetch(`${API}/teams`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (teams) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.teams = teams //put in transient state
            }
        )
}

export const fetchPlayers = () => {
    return fetch(`${API}/players`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (players) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.players = players //put in transient state
            }
        )
}

export const fetchTeamScores = () => {
    return fetch(`${API}/teamScores`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (scores) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.teamScores = scores //put in transient state
            }
        )
}






export const getTeams = () => {
    return applicationState.teams.map(team => ({ ...team }))
}

export const getPlayers = () => {
    return applicationState.players.map(player => ({ ...player }))
}

export const getTeamScores = () => {
    return applicationState.teamScores.map(score => ({ ...score }))
}

export const getState = () => {
    return { ...applicationState.state }
}

export const setTeamId = (id) => {
    return applicationState.state.teamId = id
}


export const saveTeamScores = (teamObj) => {
    const fetchCompletions = {
        method: "POST", //please create this object I sent you in permanent state
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamObj)
    }
    return fetch(`${API}/teamScores`, fetchCompletions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}