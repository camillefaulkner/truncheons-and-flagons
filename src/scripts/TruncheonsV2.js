import { getState } from "./dataAccess.js"
import { TeamsDropdown } from "./TeamDropdown.js"


export const TruncheonsV2 = () => {
    let html = ""
    let state = getState()
    if (typeof state.startGame === "undefined") {
        html = ''
    } else {
        html += `
        <section class="teams">
        <h3>New Game</h3>
        <h4>Pick Your Teams</h4>
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        </section>`
    }
    return html
}