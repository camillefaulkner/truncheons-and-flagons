import { getTeams } from "./dataAccess.js";

//map teams and print HTML for dropdown list

export const Teams = () => {
    let teams = getTeams()
    let html = `<select class="teams" id="teams">
    <option value="0">Choose one...</option>`

    let teamList = teams.map(team => { 
        return `<option class="team" value="${team.id}">${team.name}</option>`
    })

    html += teamList.join("")
    html += `</select>`

    return html
}