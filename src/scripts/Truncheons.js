import { playerField } from "./newPlayer.js"
import { NewTeam } from "./newTeams.js"
import { scoreTable } from "./Scores.js"


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
        <hr>
        <section class="scores">
            <h3>Leaderboard</h3>
            ${scoreTable()}
        </section>

    <button class="button" id="submitButton">Submit</button>`
}