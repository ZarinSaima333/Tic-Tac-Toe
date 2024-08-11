// querySelector is used to select a single element from the DOM tree, while document. querySelectorAll is used to select multiple elements from the DOM tree.

// boxes array shob buttons ase
// console.log(boxes[8])

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner_container = document.querySelector(".winner_container");
let win = document.querySelector("#win")
let newgame = document.querySelector("#newgame");


// Which player is playing?

let turnO= true;

// winning pattern

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO= true;
    enableBoxes();
    winner_container.classList.add("hide")
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO=false;
        } else {
        box.innerText = "X";
        turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

// winner checking arrow func
const showWinner = (pos1) => {
    win.innerText = `Hurray, ${pos1} Won!`;
    winner_container.classList.remove("hide");

    disableBoxes();
};


const  checkWinner = ( )=>{
    for(let i of winPatterns){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        
        if( pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                console.log("WINNER!",pos1);
                showWinner(pos1);
            }
        }
    }
    };

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);