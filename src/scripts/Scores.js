import { getTeamScores, getTeam } from "./dataAccess.js"

export const scoreTable = () => {
    let scores = getTeamScores()
    let teams = getTeam()
    let html = `<table>
                    <tr>
                        <th>Teams</th>
                        <th>Scores</th>
                    </tr>`
    let teamData = scores.map(score => {
        const foundTeam = teams.find((team) => {
            return score.teamId === team.id
        })
        html += `<tr>
                    <td>${foundTeam.name}</td>
                    <td>${score.score}</td>
                </tr>`
    })
    html += teamData.join("")
    html += `</table>`
    return html

}