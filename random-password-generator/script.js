const result=document.getElementById("result")
const length=Number(document.getElementById("length").value)
const btn=document.getElementById("btn")
const isLetters=document.getElementById("letters")
const isNumbers=document.getElementById("numbers")
const isSpecialChars=document.getElementById("specialchars")
function generateOneN(){
    max=9
    min=0
    return Math.floor(Math.random()*(max-min+1)+min)
}
function generateRandomN(length){
    let arr=[]
    for (let i=0;i<length;i++){
        generateOneN()
    }
    arr.join("")
}
btn.onclick=function(length,letters,numbers,specialchars){
    
}