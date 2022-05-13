import { getState } from "./dataAccess.js"


export const Rounds = () => {
    let state = getState()
    let html = ''
    if (typeof state.startGame === "undefined") {
        html = ''
    }
    else if (state.startGame === true) {
        html += `<h3>Round One</h3>
    
            <div class="field">
            <label>${state.selectedTeams[0]}</label>
            <input type="text" class="playerFirstName" class="input" placeholder=""/>
    </div>
    <div class="field">
            <label>${state.selectedTeams[1]}</label>
            <input type="text" class="playerLastName" class="input" placeholder=""/>
    </div>
    <div class="field">
            <label>${state.selectedTeams[2]}</label>
            <input type="text" class="playerLastName" class="input" placeholder=""/>
    </div>`
    }

    // let teamList = teams.map(team => {
    //     return `<option value="${team.id}">${team.name}</option>`
    // })
    // html += teamList.join('')
    // html += `</select><br>`
    // html += `<button class="button" id="addplayer">Add Player to Team</button>`
    return html
}