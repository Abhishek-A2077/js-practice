let salary;
const lakh=100000;
document.getElementById("ctcbutton").onclick=function(){
    let ctcval=document.getElementById("ctc").value;
    salary=Math.round((ctcval*lakh)/12);
    document.getElementById("result").textContent=`Salary per month: RS. ${salary} `;
}
