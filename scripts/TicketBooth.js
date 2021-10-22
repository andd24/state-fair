const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)
            totalTickets += 1
        }
        else if (itemClicked.id === "foodTicket") {
            const foodEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodEvent)
            totalTickets += 1
        }
        else if (itemClicked.id === "gameTicket") {
            const gameEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(gameEvent)
            totalTickets += 1
        }
        else if (itemClicked.id === "sideshowTicket") {
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
            eventHub.dispatchEvent(sideshowEvent)
            totalTickets += 1
        }
        else if (itemClicked.id === "packageTicket") {
            const packageEvent = new CustomEvent("packageTicketPurchased")
            eventHub.dispatchEvent(packageEvent)
            totalTickets += 1
        }
        TicketBooth()  
    } 
)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <p id="totalTickets">Total Tickets Purchased = ${totalTickets}</p>
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="packageTicket">Full Package Ticket</button>
        </div>
    `
}



