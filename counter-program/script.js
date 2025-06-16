const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const counter=document.getElementById("counter");
let count=0;
counter.textContent=count;
inc.onclick=function(){
    count++;
    counter.textContent=count;
}
dec.onclick=function(){
    count--;
    counter.textContent=count;
}
reset.onclick=function(){
    count=0;
    counter.textContent=count;
}