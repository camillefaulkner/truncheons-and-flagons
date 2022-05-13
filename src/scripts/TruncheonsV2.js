import { TeamsDropdown } from "./TeamDropdown"


export const TruncheonsV2 = () => {
    return `
    <h1>Truncheons & Flagons</h1>

        <section class="teams">
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        ${TeamsDropdown()}
        </section>`
}