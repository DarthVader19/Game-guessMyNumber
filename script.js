let randomNumber=Math.trunc(Math.random()*20);4
// let x=Math.trunc(Math.random()*30+5),
//   y=Math.trunc(Math.random()*5+5)
// //let randomNumber=String(x)+String(y);
console.log(randomNumber);

let score=20;
let highscore=0;

const elementSelector=function(elementid,data){

    document.querySelector(`${elementid}`).textContent=data;
};
//document.querySelector('.number').textContent=randomNumber;
//display message
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};
const changeScore=function(score){
document.querySelector('.score').textContent=score;
};
const highScore=function(highscore){
document.querySelector('.highscore').textContent=highscore;
};

//check guess
const checkGuess=function(guess){
    if(guess==randomNumber)
    {
        displayMessage('Correct Answer!!');
        score++;
        changeScore(score);
        document.querySelector('.number').textContent=randomNumber;
        highscore=score>highscore?score:highscore;
        highScore(highscore);
        document.querySelector('body').style.backgroundColor='#60b347';
     }

    else if(guess>randomNumber)
   { 
        guess-randomNumber>4? displayMessage('Too High!!'):displayMessage('Little High');
        score--;
        changeScore(score);
    }
    else
    {
        randomNumber-guess>4? displayMessage('Too Low!!'):displayMessage('Little Low');
        score--;
        changeScore(score);
    }

}
//check button pressed
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(score>1)
   checkGuess(guess);
   else
   {
       displayMessage('Game Over!!!');
       score=0;
       changeScore(score);
   }
}
);

//console.log(randomNumber);

document.querySelector('.again').addEventListener('click',function(){

    randomNumber=Math.trunc(Math.random()*20);
    document.querySelector('body').style.backgroundColor='#222';
   // document.querySelector('.number').textContent='?';
   elementSelector('.number','?');
   
});