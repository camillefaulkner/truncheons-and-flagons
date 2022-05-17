import { setSelectedTeams, getTeams, setStartGame, getPlayers } from "./dataAccess.js"
import { render } from "./main.js"
import { Rounds } from "./rounds.js"

export const TeamsDropdown = () => {
    let teams = getTeams()
    let html = `<select name="team">
    <option value="0">Choose one...</option>`

    let players = getPlayers()
    
    let teamList = teams.map(team => {
        let i = 0
        players.map(player => {
            if (parseInt(player.teamId) === parseInt(team.id)) {
                i++
                if (i === 3) {
                    html += `<option value="id--${team.id}">${team.name}</option>`
                }
            }
        })
        
    })
    html += teamList.join('')
    html += `</select><br>`
    return html
}

let teamsSelected = {}
const mainContainer = document.querySelector(".container")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "team") {
            const [,teamId] = event.target.value.split("--")
            let number = [teamId]
            teamsSelected[number] = 0
            console.log(teamsSelected)
            if (Object.keys(teamsSelected).length === 3) {
                setSelectedTeams(teamsSelected)
                // setStartGame(startgame)
                render()
                Rounds()
            }
        }
    }
)

//if teamsSelected.length === 3, then display round 1