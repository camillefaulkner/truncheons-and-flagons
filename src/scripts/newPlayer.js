import { getTeams, sendPlayer, getPlayers } from "./dataAccess.js"


export const playerField = () => {
    let teams = getTeams()
    let html = `<div class="field">
            <input type="text" class="playerFirstName" class="input" placeholder="First Name"/>
    </div>
    <div class="field">
            <input type="text" class="playerLastName" class="input" placeholder="Last Name"/>
    </div>
    <select class="choosenTeam"><option value="">Please Select a Team</option>`

    let teamList = teams.map(team => {
        return `<option value="${team.id}">${team.name}</option>`
    })
    html += teamList.join('')
    html += `</select><br>`
    html += `<button class="button" id="addplayer">Add Player to Team</button>`
    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addplayer") {
        // Get what the user typed into the form fields
        const playerTeam = document.querySelector(".choosenTeam").value
        const firstname = document.querySelector(".playerFirstName").value
        const lastname = document.querySelector(".playerLastName").value
        let playerName = `${firstname} ${lastname}`
        // Make an object out of the user input
        const dataToSendToAPI = {
            name: playerName,
            teamId: parseInt(playerTeam)
        }
        let players = getPlayers()
        let i = 0
        players.map(player => {
            if (player.teamId === parseInt(playerTeam)) {
                i++
            }

        })
        if (i < 3) {
            sendPlayer(dataToSendToAPI)
        }
        else {
            window.alert(`no`)
        }
        // Send the data to the API for permanent storage
    }
})