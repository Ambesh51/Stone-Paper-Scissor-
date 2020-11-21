function ageInDays(){
   
    var birthYear= prompt("whats year were you born...Good Friend?");
    console.log(birthYear);
var ageInDays= (2020 - birthYear)* 365;
var h1 = document.createElement('h1');
var TextArea= document.createTextNode("You are "+ ageInDays +" Day ");
console.log(TextArea);
h1.setAttribute('id', 'ageInDay');  // creare id
h1.appendChild(TextArea);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDay').remove();
} 
//challenge 2

function generatorCat(){
    var image= document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
div.appendChild(image);
}


//challenge 3
 
function rpsGame(yourChoice){
 //console.log(yourChoice) 
var humanChoice,botChoice;
humanChoice= yourChoice.id;// human input save
console.log(humanChoice);
botChoice=numberToChoice(numbers);// computer input
console.log(botChoice);
var result=decideWinner(humanChoice,botChoice);//who win check in this function
console.log(result);
 var message1=finalMessage(result);//eg:- {message:'you won', 'color':'green'}
 console.log(message1);
 rpsFrontEnd(yourChoice.id, botChoice, message1)
}

function numbers(){
    return Math.floor(Math.random() *3);

}

function numberToChoice(numbers){
    var no=numbers();
    return ['rock','paper', 'scissors'][no];
}

function decideWinner(humanChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors': 1 ,'rock': 0.2 ,'paper':0 },
        'paper':{'rock':1, 'paper':0.2, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.2, 'rock':0}
    }
        var yourScore=rpsDatabase[humanChoice][computerChoice];
        var computerScore=rpsDatabase[computerChoice][humanChoice];
        return [yourScore,computerScore];//return the score who is winner in the form of like [0,1]
}

function finalMessage(result){
    let your= result[0];
    
    if(your=== 0){
        return{'message':'You lost!','color':'red'};
    }
    else if(your=== 0.2){
        return{'message':'You tied!','color':'yellow'};
    }
    else {
        return{'message':'You won','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
var imageDatabase = {
    'rock': document.getElementById('rock').src, 
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src,

}
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv =document.createElement('div');
var botDiv =document.createElement('div');
var messageDiv =document.createElement('div');

humanDiv.innerHTML ="<img src='"+imageDatabase[humanImageChoice] + "'height=150>" 
messageDiv.innerHTML ="<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px;'>"+ finalMessage['message'] + "</h1>"
botDiv.innerHTML ="<img src='" + imageDatabase[botImageChoice] + "'>"


document.getElementById('flex-box-rps-div').appendChild(humanDiv);// this line work but not in on browser but its work on add code in source code
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);// this line work but not in on browser but its work on add code in source code

}
//"<img src='"+imageDatabase[humanImageChoice] + "' height:150>" 
