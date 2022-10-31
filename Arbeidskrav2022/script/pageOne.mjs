//EXAMPLE OF ES6 MODULES, IMPORTING AN ARRAY VARIABLE FROM ANOTHER FILE
import playerInfoArray from './database.mjs';
import {createArray} from './database.mjs';

//PUSHES VALUES FROM HARDCODED ARRAY TO LOCALSTORAGE (ONLY USED ONCE TO NOT MAKE PAGE SEEM EMPTY)
const pushToStorage = () => {

    playerInfoArray.forEach( player => {
        
        var entryId = player.id

        var textId = entryId.toString();
        
        if (localStorage.getItem(textId) != textId) {

            localStorage.setItem(textId, JSON.stringify(player));

        } 

    })
        printPlayers();
    };


//FOREACH PRINTS ALL PLAYERS TO SCREEN
const printPlayers = () => {

    const playerArr = createArray();

    let row = document.getElementById("row");

    playerArr.forEach( player => {
           
        row.innerHTML += 

        `<div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <img class="card-img-top" src="${player.img}" alt ="player">
                    <h3 class="player-name">${player.name}</h3>
                    <ul class="players-box-list">
                        <li>Age: ${player.age}</li>
                        <li>Nation: ${player.nation}</li>
                        <li>Height: ${player.height}</li>
                        <li>Position: ${player.position}</li>
                        <li>Preferred foot: ${player.preferredFoot}</li>
                        <li>Team: ${player.team}</li>
                        <li>Goals: ${player.goals}</li>
                    </ul>
                </div class="card-body">
                
                    
                </div>`
    })
    };

    //IFEE FUNCTION TO CHECK IF LOCALSTORAGE HAS BEEN USED, IF NOT, THEN IT PUSHES HARDCODED ARRAY TO LOCALSTORAGE
    (() => {
        localStorage.length > 0 ? printPlayers() : pushToStorage()
      })();
    
