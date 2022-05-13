import { setSelectedTeams, getTeams, setStartGame } from "./dataAccess.js"
import { Rounds } from "./rounds.js"

export const TeamsDropdown = () => {
    let teams = getTeams()
    let html = `<select name="team">
    <option value="0">Choose one...</option>`
    let teamList = teams.map(team => {
        return `<option value="id--${team.id}">${team.name}</option>`
    })
    html += teamList.join('')
    html += `</select><br>`
    return html
}

let teamsSelected = []
const mainContainer = document.querySelector(".container")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "team") {
            const [,teamId] = event.target.value.split("--")
            teamsSelected.push(parseInt(teamId))
            if (teamsSelected.length === 3) {
                setSelectedTeams(teamsSelected)
                // setStartGame(startgame)
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                Rounds()
            }
        }
    }
)

//if teamsSelected.length === 3, then display round 1