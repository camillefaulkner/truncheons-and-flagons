
//add scores to database

import { getState, getTeamScores, sendTeamScores, setTeamScores } from "./dataAccess.js"

let teamScores = {}
export const AddScores = () => {
    let scores = getTeamScores()
    let state = getState()
    let selectedTeams = state.selectedTeams
    let roundScores = state.teamScores

    const score1 = document.querySelector("input[name='1']").value
    const score2 = document.querySelector("input[name='2']").value
    const score3 = document.querySelector("input[name='3']").value

    if (state.roundNumber === 1) {
    scores.map(score => {
        if(score.teamId === selectedTeams[0]) {
            scoresArray.push(score.score + parseInt(score1))
        }
       else if (score.teamId === selectedTeams[1]) {
            scoresArray.push(score.score + parseInt(score2))
        }
        else if (score.teamId === selectedTeams[2]) {
            scoresArray.push(score.score + parseInt(score3))
        }
    })
    console.log("round 1", scoresArray)
    setTeamScores(scoresArray)
    }

    else if (state.roundNumber === 2) {
        roundScores[0] = roundScores[0] + parseInt(score1)
        roundScores[1] = roundScores[1] + parseInt(score2)
        roundScores[2] = roundScores[2] + parseInt(score3)
        console.log("round 2", roundScores)
        setTeamScores(roundScores)
    }

    else if (state.roundNumber === 3) {
        roundScores[0] = roundScores[0] + parseInt(score1)
        roundScores[1] = roundScores[1] + parseInt(score2)
        roundScores[2] = roundScores[2] + parseInt(score3)
        console.log("round 3", roundScores)
        setTeamScores(roundScores)
    }
}