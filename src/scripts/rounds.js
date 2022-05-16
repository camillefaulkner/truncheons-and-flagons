import { AddScores } from "./addScores.js"
import { getState, getTeams, setRoundNumber, } from "./dataAccess.js"
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
        let teamsMap = teams.map(team => {
            if (state.selectedTeams.hasOwnProperty([team.id])) {
                html += `<div class="field">
            <label>${team.name}</label>
            <input type="text" name="scoreinput" id="${team.id}" class="scoreinput" placeholder=""/>
            </div>`

                counter++
            }
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
        // AddScores()
        htmlCounter++
        console.log(htmlCounter)
        setRoundNumber(htmlCounter)
        render()

        //Rounds("Two")
    }
})


document.addEventListener(
    "change",
    (event) => {
        let teams = getTeams()
        let state = getState()
        let selectedTeams = state.selectedTeams
        // let roundScores = state.teamScores
        if (event.target.name === "scoreinput") {
            teams.map(team => {
                if (parseInt(event.target.id) === team.id) {
                    console.log(`yes`)
                    if(parseInt(event.target.value) > 3) {
                        window.alert("Points cannot be greater than 3.")
                    }
                    else {
                    selectedTeams[team.id] += parseInt(event.target.value)
                    }
                }
            })

            console.log(selectedTeams)
        }
    }
)