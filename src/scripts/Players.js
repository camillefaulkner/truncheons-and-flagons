import { getPlayers, getState } from "./dataAccess.js";

//print HTML for players of the chosen team

export const Players = () => {
    //if team.id = player.teamId, print HTML (find method)
    //needs event listener on teams

    let state = getState()
    let players = getPlayers()
    let html = "<ul>"

    let playerList = players.map(player => { 
            if (player.teamId === state.teamId) {      
                html += `<li value="${player.id}">${player.name}</li>`
            }
    })

    html += playerList.join("")
    html += "</ul>"
    return html
}