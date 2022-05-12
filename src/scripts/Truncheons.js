import { playerField } from "./newPlayer.js"
// import { Players } from "./Players.js"
import { NewTeam } from "./newTeams.js"
import { Players } from "./Players.js"
import { scoreTable } from "./Scores.js"
import { Teams } from "./Teams.js"


export const Truncheons = () => {
    return `
    <h1>Truncheons & Flagons</h1>

        <section class="teams">
            <h3>New Team</h3>
            ${NewTeam()}
        </section>
        <section class="players">
            <h3>New Player</h3>
            ${playerField()}
        </section>
        <section class="scores">
            <h3>Total Scores</h3>
            ${scoreTable()}
        </section>

    <button class="button" id="submitButton">Submit</button>`
}