import { playerField } from "./newPlayer.js"
import { NewTeam } from "./newTeams.js"
import { scoreTable } from "./Scores.js"
import { TruncheonsV2 } from "./TruncheonsV2.js"
import { Rounds } from "./rounds.js"
import { setStartGame } from "./dataAccess.js"


export const Truncheons = () => {
    return `
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
        ${Rounds()}
        </section>
        </div>
    </div>`

}

let startgame = true 
const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitButton") {
        setStartGame(startgame)
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        TruncheonsV2()
    }
})
