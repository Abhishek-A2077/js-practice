let age;
age=window.prompt(`What is your age?`);
let message= age>=18 ? "User is an Adult" : "User is a Minor"; //ternary operator
console.log(message);
if(age>=100){
    alert(`You are too old to play this game`);
    document.getElementById("num").textContent="You can't roll the die as you are more than 100 years of age";
    document.getElementById("six").textContent="";
    document.getElementById("lose").textContent="";
}
else if(age>=18){
    
    document.getElementById("btn").onclick=function(){
    let r;
    let max=6;
    let min=1;
    r=Math.floor(Math.random()*(max-min+1))+min;
    document.getElementById("num").textContent=r;
    if(r==6){
        document.getElementById("six").textContent="Thats a SIX!!!";
        document.getElementById("lose").textContent="";
    }
    else{
        document.getElementById("six").textContent="";
        document.getElementById("lose").textContent="You lose";
    }
}

}

else{
    alert(`You must be 18 or older to play this die game`);
    document.getElementById("num").textContent="You can't roll the die as you are below 18 years of age";
    document.getElementById("six").textContent="";
    document.getElementById("lose").textContent="";
}


// let min=1;
// let max=10;
// randn=Math.floor(Math.random()*(max-min+1)+min);
// console.log(randn);