export function sortData(teams, btn, team1, team2) {
  const d = document,
    $teams = d.querySelector(teams),
    $btn = d.querySelector(btn),
    $team1 = d.querySelector(team1).children,
    $team2 = d.querySelector(team2).children,
    arr1 = [],
    arr2 = [];

  //console.log($team1, $team2);

  Array.from($team1).forEach((el) => arr1.push(el.innerText));
  Array.from($team2).forEach((el) => arr2.push(el.innerText));

  //console.log(arr1, arr2);

  $btn.addEventListener("click", (e) => {
    $teams.innerHTML = null;

    arr1.sort(() => Math.random() - 0.5);
    arr2.sort(() => Math.random() - 0.5);
    //console.log(arr1, arr2);

    let maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length;
    //console.log(maxLength);

    for (let i = 0; i <= maxLength - 1; i++) {
      $teams.innerHTML += `<li>${arr1[i]} - ${arr2[i]}</li>`;
    }

    e.target.disabled = true;
    setTimeout(() => (e.target.disabled = false), 1000);
  });
}
