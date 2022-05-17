import { playerField } from "./newPlayer.js"
import { NewTeam } from "./newTeams.js"
import { scoreTable } from "./Scores.js"
import { TruncheonsV2 } from "./TruncheonsV2.js"
import { Rounds } from "./rounds.js"
import { getState, setStartGame } from "./dataAccess.js"
import { render } from "./main.js"


export const Truncheons = () => {
    let state = getState()
    let counter = state.roundNumber
    let string = "One"
    if (counter === 2) {
        string = "Two"
    }
    else if (counter === 3) {
        string = "Three"
    }
    let html = `
    <h1 class="header">Truncheons & Flagons</h1>
    <div class="sidebyside">
        <div class="leftside">
        <section class="teams">
            <h3>New Team</h3>
            ${NewTeam()}
        </section>
        <section class="players">
            <h3>New Player</h3>
            ${playerField()}
        </section>
        <hr>
        <section class="scores">
            <h3>Leaderboard</h3>
            <p class="disclaimer">Teams must have 3 players to join a game.</p>
            ${scoreTable()}
        </section>
        <br><br>
        <button class="button" id="submitButton">Start Button</button>
        </div>
        <div class="rightside">
        <section>
        ${TruncheonsV2()}
        </section>
        <section>
        ${Rounds(string)}`
       html += `</section>
        </div>
    </div>`

    return html

}

let startgame = true 
const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitButton") {
        setStartGame(startgame)
        render()
        TruncheonsV2()
    }
})
