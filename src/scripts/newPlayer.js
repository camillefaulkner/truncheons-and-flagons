import { getTeams } from "./dataAccess.js"


export const playerField = () => {
    let teams = getTeams()
    let html = `<div class="field">
            <input type="text" name="playerFirstName" class="input" placeholder="First Name"/>
    </div>
    <div class="field">
            <input type="text" name="playerLastName" class="input" placeholder="Last Name"/>
    </div>
    <select class="choosenAuthor"><option value="">Please Select a Team</option>`

    let teamList = teams.map(team => {
        return `<option value="${team.id}">${team.name}</option>`
    })
    html += teamList.join('')
    html += `</select><br>`
    html += `<button class="button" id="addplayer">Add Player to Team</button>`
    return html
}