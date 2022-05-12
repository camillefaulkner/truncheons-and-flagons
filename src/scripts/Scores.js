import { getTeamScores, getTeams, getState, getPlayers } from "./dataAccess.js"

export const scoreTable = () => {
    let scores = getTeamScores()
    let teams = getTeams()
    let players = getPlayers()

    let html = ''


    html = `<table>
                    <tr>
                        <th>Teams</th>
                        <th>Players</th>
                        <th>Scores</th>
                    </tr>`
    let teamData = teams.map(team => {
        // const foundTeam = teams.find((team) => {
        //     return score.teamId === team.id
        // })
        let i = 0
        const playerNumber = players.map(player => {
            if (player.teamId === team.id) {
                i++
            }
        })
        html += `<tr>
                    <td>${team.name}</td>
                    <td>${i}</td>`

        const foundScore = scores.find(score => {
            return score.teamId === team.id
        })
        if (typeof foundScore === "undefined") {
            html += `<td>0</td>`
        } else {
            html += `<td>${foundScore.score}</td>`
        }
        // if (typeof foundScore.score === "undefined") {
        //     html += `<td>0</td>`
        // } else {

        //     html += `<td>${foundScore.score}</td>`
        // }
        html += `</tr>`
    })
    html += teamData.join("")

    html += `</table>`
    return html

}