import { getState, getTeams, setRoundNumber, updateTeamScores, getTeamScores } from "./dataAccess.js"
import { render } from "./main.js"

export const Rounds = (number) => {
    let state = getState()
    let teams = getTeams()
    let selectedTeams = state.selectedTeams
    let html = ''
    if (typeof state.selectedTeams === "undefined") {
        html = ''
    }
    else if (typeof state.selectedTeams !== "undefined" && state.roundNumber < 4) {
        html = `<h3>Round ${number}</h3>`
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
    } else if (state.roundNumber >= 4) {
        // saveTeamScores()
        // html = ''

        //calculate max points
        let values = Object.values(selectedTeams);
        let maxPoints = Math.max(...values);

        //find key that has the max points as a value
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        let winnerTeam = getKeyByValue(selectedTeams, maxPoints)

        const foundWinner = teams.find((team) => {
            return parseInt(team.id) === parseInt(winnerTeam)
        })
        html = `<br><br><br><br><div class="winner">Team ${foundWinner.name} is the winner with ${maxPoints} points!</div>`
        //if teamScores.teamId === Object.keys(selectedTeams)
        //then teamScores.scores += Object.value
        //how to send to saveTeamScores() ???
    }
    return html
}

let htmlCounter = 1
setRoundNumber(htmlCounter)

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    let teamScores = getTeamScores()
    let state = getState()
    let selectedTeams = state.selectedTeams
    if (clickEvent.target.id === "saveScore") {
      
        htmlCounter++
        console.log(htmlCounter)
        setRoundNumber(htmlCounter)
        render()
        if (state.roundNumber >= 3) {
            //iterate teamscores, if teamId === a key of the selectedteams object
            //then pull that key's value and add it to the permanent state score with the same teamId
            teamScores.map(teamscore => {
                if (Object.keys(selectedTeams).includes(teamscore.teamId.toString())) { //the array values were keys
                    
                    let score = teamscore.score + parseInt(selectedTeams[teamscore.teamId])
                    updateTeamScores(score, teamscore.teamId) //score, teamId
                }
            })
        }
    }
})

document.addEventListener(
    "change",
    (event) => {
        let teams = getTeams()
        let state = getState()
        let selectedTeams = state.selectedTeams
        if (event.target.name === "scoreinput") {
            teams.map(team => {
                if (parseInt(event.target.id) === team.id) {
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