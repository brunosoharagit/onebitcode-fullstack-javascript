/*let spaceship = {
   name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ten. Ana Júlia", "Sgt. Marques", "Recruta Primo"]
}

spaceship.crew.push("Ten. Fernanda");
console.log(spaceship);
*/

let players = [
    {name: "Yotyan", totalLvl: 2857, worldRanking: 63889},
    {name: "Omid", totalLvl: 2898, worldRanking: 3},
    {name: "L33", totalLvl: 2898, worldRanking: 2}
]

console.log(players[1].name);
console.log(players[2].totalLvl);

players.forEach(player => {
    alert(`${player.name} --> ${player.totalLvl}`);
})