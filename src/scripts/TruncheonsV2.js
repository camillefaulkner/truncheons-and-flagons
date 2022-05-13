import { TeamsDropdown } from "./TeamDropdown"


export const TruncheonsV2 = () => {
    return `
        <section class="teams">
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        </section>`
}