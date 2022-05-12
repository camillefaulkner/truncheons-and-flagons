import { getState, getTeams, setTeamId } from "./dataAccess.js";

//map teams and print HTML for dropdown list

export const Teams = () => {
    let teams = getTeams()
    let state = getState()
    let html = `<select id="teams">`

    if (typeof state.teamId === "undefined") {
        html += `<option value="0">Choose one... </option> `
        let teamList = teams.map(team => { 
            return `<option value="${team.id}">${team.name}</option>`
        })
        html += teamList.join("")
    }
    else {
        const foundTeam = teams.find((team) => {
            return team.id === state.teamId
        })
        html += `<option value="0">${foundTeam.name}</option> `
        let teamList = teams.map(team => { 
        return `<option value="${team.id}">${team.name}</option>`
        })
    html += teamList.join("")
    }
    html += `</select>`

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "teams") {
            let team = document.querySelector("#teams").value
            setTeamId(parseInt(team))
            
            let state = getState()
            console.log(state)
        }
    }
)