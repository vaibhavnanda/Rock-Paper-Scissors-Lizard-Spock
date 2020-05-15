let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const box_div = document.querySelector(".box");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("ro");
const paper_div = document.getElementById("pa");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("li");
const spock_div = document.getElementById("sp");



function randomGenerator(){
	const choices = ["ro","pa","sc","li","sp"];
	const rand = Math.floor(Math.random()*5);
	return choices[rand];
}



function getName(name){
	if(name === "ro") return "Rock";
	if(name === "pa") return "Paper";
	if(name === "sc") return "Scissors";
	if(name === "li") return "Lizard";
	if(name === "sp") return "Spock";
	
}

function win(user,comp){
	
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const colChange = document.getElementById(user);
	const u = "User".fontsize(3).sub();
	const c = "Comp".fontsize(3).sub();
	result_div.innerHTML = `${getName(user)}${u} beats ${getName(comp)}${c}. You Win.`;
	colChange.classList.add("togreen");
	setTimeout(function(){ colChange.classList.remove("togreen")} , 300);
}

function lose(user,comp){
	
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const colChange = document.getElementById(user);	
	const u = "User".fontsize(3).sub();
	const c = "Comp".fontsize(3).sub();
	result_div.innerHTML = `${getName(comp)}${c} beats ${getName(user)}${u}. You Lose.`;
	colChange.classList.add("tored");
	setTimeout(function(){ colChange.classList.remove("tored")} , 300);
}

function draw(user,comp){
	
	const u = "User".fontsize(3).sub();
	const c = "Comp".fontsize(3).sub();
	const colChange = document.getElementById(user);	
	result_div.innerHTML = `${getName(user)}${u} equals ${getName(comp)}${c}. It's a Draw.`;
	colChange.classList.add("togrey");
	setTimeout(function(){ colChange.classList.remove("togrey")} , 300);
}


function game(user){
	const comp = randomGenerator();
	switch(user + comp){
	case "scpa":
	case "rosc":
	case "paro":
	case "roli":
	case "lisp":
	case "spsc":
	case "scli":
	case "lipa":
	case "pasp":
	case "spro": win(user,comp); break;
	
    case "pasc":
    case "scro":
    case "ropa":
	case "liro":
	case "spli":
	case "scsp":
	case "lisc":
	case "pali":
	case "sppa":
	case "rosp": lose(user,comp); break;
	
	case "roro":
	case "papa":
	case "scsc":
	case "lili":
	case "spsp": draw(user,comp); break;
			
	}
	
}


function main()
{
	rock_div.addEventListener('click',function(){
		game("ro");
	})
	paper_div.addEventListener('click',function(){
		game("pa");
	})
	scissors_div.addEventListener('click',function(){
		game("sc");
	})
	lizard_div.addEventListener('click',function(){
		game("li");
	})
	spock_div.addEventListener('click',function(){
		game("sp");
	})
}

main();
