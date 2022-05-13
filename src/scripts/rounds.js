import { AddScores } from "./addScores.js"
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
        let counter = 1
        let foundTeams = state.selectedTeams.map(selectedTeam => {
            let findTeam = teams.find((team) => {
                return selectedTeam === team.id
            })
            html += `<div class="field">
            <label>${findTeam.name}</label>
            <input type="text" name="${counter}" id="${findTeam.id}" class="input" placeholder=""/>
            </div>`

            counter++
        })
        html += `<button class="button" id="saveScore">Save Round Scores</button>`
    }
    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveScore") {
        AddScores()
    }
})
