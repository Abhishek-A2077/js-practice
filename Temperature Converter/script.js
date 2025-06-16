const btn=document.getElementById("btn");
const CF=document.getElementById("CtoF");
const FC=document.getElementById("FtoC");
const T=document.getElementById("temp");
const result=document.getElementById("result");
function CtoF(temp){
    let F=(temp*(9/5))+32;
    return F;
}
function FtoC(temp){
    let C=(temp-32)*(5/9);
    return C;
}
btn.onclick=function(){
    if(CF.checked){
        temp=Number(T.value);
        result.textContent=`${CtoF(temp)} F`;
    }
    else if(FC.checked){
        temp=Number(T.value);
        result.textContent=`${FtoC(temp)} C`;
    }
    else{
        result.textContent="Select either option to convert";
    }
}