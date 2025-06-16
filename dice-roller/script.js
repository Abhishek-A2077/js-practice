let roll=document.getElementById("btn");
let num=document.getElementById("num");
let result=document.getElementById("result");
let images=document.getElementById("images");
let nattempts=document.getElementById("attempts");
function rollOneDie(){
    let min=1;
    let max=6;
    let randnum=Math.floor(Math.random()*(max-min+1))+min;
    return randnum;
}
function multiple(n){
    let arr=[];
    let randnum=0;
    for(let i=0;i<n;i++){
        randnum=rollOneDie();
        arr.push(randnum);
    }
    return arr;
    
}

let attempts=0;
roll.onclick=function(){
    let n=num.value;
    let numarr=multiple(n);
    let imagesarr=[];
    for(let die of numarr){
        die=Number(die);
        console.log(die);
        switch(die){
            case 1:
                imagesarr.push(`<img src="images/one.png">`);
                break;
            case 2:
                imagesarr.push(`<img src="images/two.png">`);
                break;
            case 3:
                imagesarr.push(`<img src="images/three.png">`);
                break;
            case 4:
                imagesarr.push(`<img src="images/four.png">`);
                break;
            case 5:
                imagesarr.push(`<img src="images/five.png">`);
                break;
            case 6:
                imagesarr.push(`<img src="images/six.png">`);
                break;
        }
        //or use: imagesarr.push(`<img src="images/${die}.png">`);
    }

    //jackpot if all dice are same
    let same=false;
    let i=0;
    for (let j=1;j<numarr.length;j++){
        if(numarr[i]==numarr[j]){
            same=true;
        }
        else{
            same=false;
            break;
        }
    }
    if(same==true){
        alert(`Jackpot! in ${attempts} attempts.`);
        console.log(`Jackpot! in ${attempts} attempts.`);
        attempts=0;
    }
    else{
        attempts++;
    }
    //jackpot part ends
    
    console.log(imagesarr.join(""));
    images.innerHTML=`${imagesarr.join("")}`;
    result.innerHTML=`<p>${numarr.join(", ")}</p>`;
    nattempts.textContent=`Attempts without a jackpot: ${attempts}`;
}
