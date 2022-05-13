import { getState, getTeams } from "./dataAccess.js"


export const Rounds = () => {
    let state = getState()
    let teams = getTeams()
    let html = ''
    if (typeof state.selectedTeams === "undefined") {
        html = ''
    }
    else if (typeof state.selectedTeams !== "undefined") {
        html += `<h3>Round One</h3>`
        let foundTeams = state.selectedTeams.map(selectedteam => {
            let findTeam = teams.find((team) => {
                return selectedteam === team.id
            })
            html += `<div class="field">
            <label>${findTeam.name}</label>
            <input type="text" class="playerFirstName" class="input" placeholder=""/>
            </div>`
        })
        html += `<button class="button" id="addplayer">Save Round Scores</button>`
    }
    return html
}