import { TeamsDropdown } from "./TeamDropdown.js"


export const TruncheonsV2 = () => {
    return `
        <section class="teams">
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        </section>`
}