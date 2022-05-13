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
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        </section>`
    }
    return html
}