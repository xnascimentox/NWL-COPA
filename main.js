function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}
let delay = -0.5
function creatCard(date, day, games) {
  delay = delay + 0.6
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "ghana")
  ) +
  creatCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "ira") +
      createGame("holanda", "13:00", "equador") +
      createGame("catar", "10:00", "senegal")
  ) +
  creatCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("franca", "13:00", "dinamarca") +
      createGame("mexico", "16:00", "argentina")
  ) +
  creatCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("portugal", "13:00", "uruguai")
  )
