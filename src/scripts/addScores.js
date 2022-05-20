
//add scores to database

import { getState, getTeams, getTeamScores, sendTeamScores, setTeamScores } from "./dataAccess.js"


export const AddScores = () => {
    let scores = getTeamScores()
    let state = getState()
    let team = getTeams()
    let selectedTeams = state.selectedTeams
    let roundScores = state.teamScores


    selectedTeams[team.id] = parseInt(document.querySelector(`#${team.id}`).value)
    let score2 = parseInt(document.querySelector("input[name='2']").value)
    let score3 = parseInt(document.querySelector("input[name='3']").value)

    //if selectedTeams has team.id, then add to score property

    if (state.roundNumber === 1) {
        scores.map(score => {
            if (Object.keys(selectedTeams) === score.teamId) {
                console.log(`test`)
                Object.values(selectedTeams)[0] = score.score + parseInt(score1)
                Object.values(selectedTeams)[1] = score.score + parseInt(score2)
                Object.values(selectedTeams)[2] = score.score + parseInt(score3)
            }
            //    else if (score.teamId === selectedTeams.hasOwnProperty([score.teamId])) {
            //     }
            //     else if (score.teamId === selectedTeams.hasOwnProperty([score.teamId])) {
            //     }
        })
        console.log(selectedTeams)
        // setTeamScores(scoresArray)
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