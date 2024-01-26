export function giveAway(btn, players, winner) {
  const d = document,
    $players = d.querySelector(players).children,
    $btn = d.querySelector(btn),
    $winner = d.querySelector(winner),
    totalPlayers = $players.length;

  //console.log($players, $players.length, $players[1]);

  $btn.addEventListener("click", (e) => {
    let random = Math.round(Math.random() * totalPlayers),
      randomWinner = $players[random];

    $winner.innerHTML = `El ganador es <mark>${randomWinner.innerText}</mark>`;
    e.target.disabled = true;
    setTimeout(() => (e.target.disabled = false), 1000);
  });
}
