let boxes = document.querySelectorAll('.box');
let resetBth= document.querySelector('#reset');
let turn0=true;
let newGameBtn= document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6] 
];

boxes.forEach(box => {
    box.addEventListener('click',function(){
        if(turn0){

            box.innerText='0'; 
            box.style.color='blue';
            turn0=false;


            box.disable=true;
            checkWinner();
        }
        else{
            box.innerText='X' ;                           
            box.style.color='red';
            turn0=true;
            box.disable=true;
            checkWinner();
        }
    });
});


const enableBoxes = () => {
    for (let box of boxes){
        box.disabled=  false;
        box.innerText = "";

    }
};



const disableBoxes = () => {
    for (let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner) => {
    msg.innerText='congratulations winner is '+ winner;
    msg.style.fontSize = '30px';
    msgContainer.classList.remove('hide');
    disableBoxes();
}  ;


const checkWinner = () => {
    let hasWin=false;
    for (let pattern of winPatterns){

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !== '' && pos1Val===pos2Val && pos3Val!=='' && pos1Val===pos3Val){
            hasWin=true;
            showWinner(pos1Val);
            break;
        }
    }

    if(!hasWin){
        const allBoxes = [...boxes].every((box) => box.innerText !== '');
        if(allBoxes){
            msgConatainer.classList.remove('hide');
            msg.innerText = 'Match Drawn';
        }
    }
};


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgConatainer.classList.add('hide');

};

newGameBtn.addEventListener('click',resetGame);


resetBth.addEventListener('click',resetGame);