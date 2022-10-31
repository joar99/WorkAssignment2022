//ARRAY TO EXPORT USING ES6 MODULES
let playerInfoArray = [

    { 
        id: 0,
        name: "Luis Di­az ",
        age: 25,
        nation:"Colombia",
        height: "178cm",
        position: "Forward",
        preferredFoot: "Right",
        team: "Liverpool",
        goals: 7,
        img: "/Images/luisdiaz.png"
    },
    { 
        id: 1,
        name: "Erling Haaland",
        age: 22,
        nation:"Norway",
        height: "194cm",
        position: "Forward",
        preferredFoot: "Left",
        team: "Manchester City",
        goals: 11,
        img: "/Images/erlinghaaland.png"
    },
    { 
        id: 2,
        name: "Virgil Van Dijk",
        age: 31,
        nation:"Netherlands",
        height: "193cm",
        position: "Defender",
        preferredFoot: "Left",
        team: "Liverpool",
        goals: 18,
        img: "/Images/virgil.png"
    },
    { 
        id: 3,
        name: "Scott McTominay",
        age: 23,
        nation:"Scotland",
        height: "193cm",
        position: "Midfielder",
        preferredFoot: "Right",
        team: "Manchester United",
        goals:11,
        img: "/Images/scottMc.png"
    },
    { 
        id: 4,
        name: "Harry Kane",
        age: 23,
        nation:"England",
        height: "188cm",
        position: "Forward",
        preferredFoot: "Right",
        team: "Tottenham Hotspur",
        goals: 6,
        img: "/Images/harrykane.png"
    },
    { 
        id: 5,
        name: "Bruno Fernandes",
        age: 23,
        nation:"Portugal",
        height: "179cm",
        position: "Midfielder",
        preferredFoot: "Right",
        team: "Manchester United",
        goals: 37,
        img: "/Images/bruno.png"
    },
    { 
        id: 6,
        name: "Diogo Dalot",
        age: 23,
        nation:"Portugal",
        height: "184cm",
        position: "Defender",
        preferredFoot: "Right",
        team: "Manchester United",
        goals: 0,
        img: "/Images/diego.png"
    },
    { 
        id: 7,
        name: "Martin Ødegaard",
        age: 23,
        nation: "Norway",
        height: "178cm",
        position: "Midfielder",
        preferredFoot: "Left",
        team: "Arsenal",
        goals: 10,
        img: "/Images/degaard.png"
    }
];

export default playerInfoArray;


//GETS ARRAY FROM LOCALSTORAGE
export const createArray = () => {

    let newPlayerArray = []

    Object.keys(localStorage).forEach(function(key) {

        let playerObj = localStorage.getItem(key)

        let playerToPush = JSON.parse(playerObj)

        newPlayerArray.push(playerToPush)

    })

    return newPlayerArray;

}










