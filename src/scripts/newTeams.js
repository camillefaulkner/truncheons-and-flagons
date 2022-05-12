import { getTeams, sendTeam } from "./dataAccess.js";

export const NewTeam = () => {
    let html = `<input type="text" name="newTeam" class="input" placeholder="Team Name"/>
    <button class="button" id="createTeam">Create Team</button>`

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createTeam") {
        // Get what the user typed into the form fields
        const userTeam = document.querySelector("input[name='newTeam']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userTeam
        }

        // Send the data to the API for permanent storage
        sendTeam(dataToSendToAPI)
    }
})