import { getTeams, setTeamId } from "./dataAccess.js";

//map teams and print HTML for dropdown list

export const Teams = () => {
    let teams = getTeams()
    let html = `<select class="teams">
    <option value="0">Choose one...</option>`

    let teamList = teams.map(team => { 
        return `<option id="team--${team.id}">${team.name}</option>`
    })

    html += teamList.join("")
    html += `</select>`

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "team") {
            const [, teamId] = event.target.value.split("--")

            let newReservationId = parseInt(reservationId)
            let newClownId = parseInt(clownId)
  
            const completion = {
                reservationId: newReservationId,
                clownId: newClownId,
                date_created: Date.now()
             }

             saveCompletion(completion)

        }
    }
)