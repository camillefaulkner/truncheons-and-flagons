import { getTeams } from "./dataAccess.js"

export const TeamsDropdown = () => {
    let teams = getTeams()
    let html = `<select>`
    let teamList = teams.map(team => {
        return `<option value="${team.id}">${team.name}</option>`
    })
    html += teamList.join('')
    html += `</select><br>`
    html += `<button class="button" id="addplayer">Add Player to Team</button>`
    return html
}