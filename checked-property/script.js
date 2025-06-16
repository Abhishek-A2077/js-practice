const yes=document.getElementById("Degree1");
const no=document.getElementById("Degree2");
const aiml=document.getElementById("1");
const frontend=document.getElementById("2");
const backend=document.getElementById("3");
const change1=document.getElementById("change1");
const change2=document.getElementById("change2");
const change3=document.getElementById("change3");
const change4=document.getElementById("change4");
const change5=document.getElementById("change5");

document.getElementById("btn").onclick=function(){
    if(yes.checked){
        change1.textContent="You have a Degree";
    }
    else{
        change1.textContent="You do NOT have a Degree";
    }
    if(aiml.checked){
        change2.textContent="You are an AI/ML developer";
        
    }
    else{
        change2.textContent="";
    }
   
    if(frontend.checked){
        change4.textContent="You are a Frontend developer";
    }
    else{
        change4.textContent="";
    }
    if(backend.checked){
        change5.textContent="You are an Backend developer";
    }
    else{
        change5.textContent="";
    }
    if(frontend.checked && backend.checked){
        change3.textContent="You are a Full Stack developer";
        change4.textContent="";
        change5.textContent="";
    }
    else{
        change3.textContent="";
    }
    
}