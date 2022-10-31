
let addPlayerBtn = document.getElementById("add-player-btn");
let outputTag = document.getElementById("save-output");
let headerTag = document.getElementById("header-h1");

//GLOBAL VARIABLES
let playerName;
let playerAge;
let playerNation;
let playerHeight;
let playerPosition;
let playerFoot;
let playerTeam;
let playerGoal;
let playerImg;


addPlayerBtn.onclick = () => {
    outputTag.innerHTML = "";

    playerName = document.getElementById("player-name-textbox").value;
    playerAge = document.getElementById("player-age-textbox").value;
    playerNation = document.getElementById("player-nation-textbox").value;
    playerHeight = document.getElementById("player-height-textbox").value;
    playerPosition = document.getElementById("player-position-textbox").value;
    playerFoot = document.getElementById("player-foot-textbox").value;
    playerTeam = document.getElementById("player-team-textbox").value;
    playerGoal = document.getElementById("player-goal-textbox").value;
    playerImg = document.getElementById("player-image-textbox").value;
    
    
    //CODE HERE IS TO NOT ALLOW USER TO LEAVE FIELDS EMPTY
    /*let valuesCheck = []
    valuesCheck.push(playerName, playerAge, playerNation, playerHeight, playerPosition, playerFoot, playerTeam, playerGoal, playerImg);
    let runStorage = 0;
    for (let i = 0; i < valuesCheck.length; i++) {
        if (valuesCheck[i] === "") {break;} else {runStorage++}
    }
    runStorage === 9 ? playerToStorage() : outputTag.innerHTML = "All Fields Must Contain Values"*/

    playerToStorage();


    }

    //TAKES VALUES OF INPUT AND PUSHES TO LOCALSTORAGE
    function playerToStorage() {

        //CHECKS FOR THE AMMOUNT OF KEYS IN LOCALSTORAGE, THIS IS TO MIMIC AN ITERATIVE ID KEY IN A DATABASE
    let keyVar = Object.entries(localStorage).length

    let idNum = keyVar + 1;

    let idToUse = idNum.toString();

    let playerObj = {
        id: idNum,
        name: playerName,
        age: playerAge,
        nation: playerNation,
        height: playerHeight,
        position: playerPosition,
        preferredFoot: playerFoot,
        team: playerTeam,
        goals: playerGoal,
        img: playerImg
    }

    localStorage.setItem(idToUse, JSON.stringify(playerObj))
    headerTag.innerHTML = "Player Added"
    headerTag.style.color = "green"
    }

    
    //ATTEMPTED TO GET IMAGE FROM LOCAL MACHINE, IT WOULD HOWEVER NOT DISPLAY
    //ISSUE PERTAINS TO PATH, I DID NOT FIND A WAY TO LOCATE THE FULL PATH OF IMAGES PROVIDED WITHIN THE ES6 FILEPICKER API
    //DIFFERENT ATTEMPTS WERE MADE AT MAKING A COPY OF THE FILE TO ENTER INTO THE IMAGES FOLDER WHERE ABSOLUTE PATH WOULD ALWAYS BE KNOWN, HOWEVER UNSUCCESSFULL
    //ATTEMPTS WERE ALSO MADE TO USE FUNCTIONS THAT WOULD EXCTRACT THE COMPLETE PATH
    //let playerImgBtn = document.getElementById("player-img-btn");
    
    /*let fileHandle;
    let fileData;
    playerImgBtn.onclick = async () => {

        [fileHandle] = await window.showOpenFilePicker();
        fileData = await fileHandle.getFile();

        console.log(fileData)
    }*/

    
     
    
    
    

















   







