import { Players } from "./Players.js"
import { scoreTable } from "./Scores.js"
import { Teams } from "./Teams.js"


export const Truncheons = () => {
    return `
    <h1>Truncheons & Flagons</h1>

        <section class="teams">
            <h3>Teams</h3>
            ${Teams()}
        </section>
        <section class="players">
            <h3>Players</h3>
            ${Players()}
        </section>
        <section class="scores">
            <h3>Total Scores</h3>
            ${scoreTable()}
        </section>

    <button class="button" id="submitButton">Submit</button>`
}