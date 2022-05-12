import { getState, getTeams, setTeamId } from "./dataAccess.js";

//map teams and print HTML for dropdown list

export const Teams = () => {
    let teams = getTeams()
    let html = `<select id="teams">
    <option value="0">Choose one...</option>`

    let teamList = teams.map(team => { 
        return `<option value="${team.id}">${team.name}</option>`
    })

    html += teamList.join("")
    html += `</select>`

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "teams") {
            const [, teamId] = event.target.value
            setTeamId(parseInt(teamId))
            let state = getState()
            console.log(state)
        }
    }
)