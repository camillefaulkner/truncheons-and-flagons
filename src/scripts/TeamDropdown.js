import { getTeams } from "./dataAccess.js"

export const TeamsDropdown = () => {
    let teams = getTeams()
    let html = `<select>
    <option value="0">Choose one...</option>`
    let teamList = teams.map(team => {
        return `<option value="${team.id}">${team.name}</option>`
    })
    html += teamList.join('')
    html += `</select><br>`
    return html
}