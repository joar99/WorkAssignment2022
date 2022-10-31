import { createArray } from "./database.mjs";

const nameTxt = document.getElementById("name-txt");
const searchNameBtn = document.getElementById("search-name-btn");
const positionTxt = document.getElementById("position-txt");
const positionBtn = document.getElementById("search-position-btn");
const clubSelect = document.getElementById("club-select");
const outputSection = document.getElementById("output-section");


const allPlayers = createArray();


//FOREACH TO PRINT PLAYERS
const showPlayers = (players) => {
  let htmlTxt = "";
  players.forEach((player) => {
    htmlTxt += `
                <div class="players-box">
                <div class="player-image">
                    <img class="img-fluid" src="${player.img}" alt ="player">
                    <h3 class="name">${player.name}</h3>
                </div>
                
                    <ul class="players-box-list">
                        <li>Age: ${player.age}</li>
                        <li>Nation: ${player.nation}</li>
                        <li>Height: ${player.height}</li>
                        <li>Position: ${player.position}</li>
                        <li>Preferred foot: ${player.preferredFoot}</li>
                        <li>Team: ${player.team}</li>
                        <li>Goals: ${player.goals}</li>
                    </ul>
                </div>
                    `;
  });
  outputSection.innerHTML = htmlTxt;
};


//FUNCTION TO FILTER BY NAME
const searchName = () => {
  let name = nameTxt.value;
  let searchedPlayers = allPlayers.filter((player) =>
    player.name.toLowerCase().includes(name)
  );
  showPlayers(searchedPlayers);
  nameTxt.value = "";
};

//FUNCTION TO FILTER BY POSITION
const searchPosition = () => {
  let position = positionTxt.value;
  let searchedPlayers = allPlayers.filter((player) =>
    player.position.toLowerCase().includes(position)
  );
  showPlayers(searchedPlayers);
  positionTxt.value = "";
};

//FUNCTION TO FILTER BY CLUB
const searchClub = () => {
  let team = clubSelect.value;
  let searchedPlayers = allPlayers.filter((player) => player.team === team);
  showPlayers(searchedPlayers);
  clubSelect.value = "";
};

searchNameBtn.addEventListener("click", searchName);
positionBtn.addEventListener("click", searchPosition);
clubSelect.addEventListener("change", searchClub);