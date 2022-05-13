import { Truncheons } from "./Truncheons.js"
import { fetchPlayers, fetchTeams, fetchTeamScores } from "./dataAccess.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



export const render = () => {
    fetchTeams()
        .then(() => fetchPlayers())
        .then(() => fetchTeamScores())
        .then(
            () => {
                mainContainer.innerHTML = Truncheons()
            }
        )
}

render()