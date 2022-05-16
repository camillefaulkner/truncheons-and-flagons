import { AddScores } from "./addScores.js"
import { getState, getTeams, setRoundNumber } from "./dataAccess.js"
import { render } from "./main.js"

export const Rounds = (number) => {
    let state = getState()
    let teams = getTeams()
    let html = ''
    if (typeof state.selectedTeams === "undefined") {
        html = ''
    }
    else if (typeof state.selectedTeams !== "undefined") {
        html += `<h3>Round ${number}</h3>`
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

let htmlCounter = 1
setRoundNumber(htmlCounter)

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveScore") {
        AddScores()
        htmlCounter++
        console.log(htmlCounter)
        setRoundNumber(htmlCounter)
        render()

        //Rounds("Two")
    }
})
