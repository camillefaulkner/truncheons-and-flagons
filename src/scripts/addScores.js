
//add scores to database

import { getState, getTeamScores, sendTeamScores } from "./dataAccess.js"

export const AddScores = () => {
    let scores = getTeamScores()
    let state = getState()
    let selectedTeams = state.selectedTeams

    let score1 = parseInt(document.querySelector("input[name='1']").value)
    let score2 = parseInt(document.querySelector("input[name='2']").value)
    let score3 = parseInt(document.querySelector("input[name='3']").value)

    console.log(score1, score2, score3)

    let scoresMap = scores.map(score => {
        if(score.teamId === selectedTeams[0]) {
            score.score = score.score + parseInt(score1)
        }
       else if (score.teamId === selectedTeams[1]) {
            score.score = score.score + parseInt(score2)
        }
        else if (score.teamId === selectedTeams[2]) {
            score.score = score.score + parseInt(score3)
        }
    })

    console.log(scores)
}