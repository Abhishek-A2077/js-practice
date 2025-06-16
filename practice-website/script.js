// //topic 1: basics
// //first
// console.log("this is logged into console");
// //second
// alert("this is your alert");
// //third
// document.getElementById(`p1`).textContent=`changes text content to this`;

//topic 2: variables
// let x=100;
// let y; 
// y="variable";
// let z=true;
// console.log(`${x} is a ${typeof(x)}`);
// alert(`adds 2 new lines to console and changes heading`);
// console.log(`this (${y}) is a ${typeof(y)}`);
// console.log(`${z} is a ${typeof(z)} variable`);
// document.getElementById(`head1`).textContent=`this, i.e, ${x} is a ${typeof(x)} type variable`;

// // topic 3: arithmetic operators and operator precedence
// let a=10;
// let b=2;
// let c=100;
// c/=10;
// console.log(c);

// /*aritmetic operator precedence: 
// paranthesis
// exponent
// multiplication division modulo
// addition subtraction*/

// topic 4: input
//getting input as window prompt
// username=window.prompt("enter your name");
// document.getElementById("namechange").textContent=`your name is ${username}`;

// getting input from button and text box
// let username;
// document.getElementById("namebutton").onclick=function(){
//     username=document.getElementById("nameinput").value;
//     console.log(`name of user is ${username}`);
//     document.getElementById("namechange").textContent=`Hello, ${username}. Please continue filling in your details.`;
// }

// // topic 5:type conversion
// let a=10;
// let b=a+1;
// console.log(b,typeof(b));
// a=String(a);
// b=a+1;
// console.log(b,typeof(b));

//topic 8: math object
//round,trunc,ceil,floor,PI,pow,sqrt,log,abs,sign,sin,cos,tan

//topic 14: string manipulation methods
// let uname="BroCode";
// let newChar;
// newChar = uname.repeat(9);
// console.log(newChar);
//startsWith,endsWith,Includes, replaceAll, trim, toLowerCase, toUpperCase, charAt, indexOf,lastIndexOf

//topic 15: string slicing
// str="slice this";
// newstr=str.slice(str.indexOf(" "));
// console.log(newstr);

//topic 16: Method Chaning
// let uname="    abHiSheK a      ";
// uname=uname.trim().charAt(0).toUpperCase()+ uname.trim().slice(1,uname.trim().indexOf(" ")).toLowerCase() + " " + uname.trim().charAt(uname.trim().indexOf(" ")+1).toUpperCase() + uname.trim().slice(uname.trim().indexOf(" ")+2).toLowerCase();
// console.log(uname);

// //topic 19: While loops
// let loggedin=false;
// let username;
// let password;
// while(!loggedin){
//     username=window.prompt("Enter username:");
//     password=window.prompt("Enter password:");
//     username=="Abhishek"&&password=="123" ? (console.log("Logged in"),loggedin=true) : console.log("Not logged in");
// }

//topic 20: for loops, break, continue
// for(let i=0;i<=10;i++){
//     if(i==7){
//         continue;
//     }
//     console.log(i);
// }

// //topic 22: functions
// function circumference(r){
//     num=2*Math.PI*r;
//     return Math.round(num*100)/100;
// }
// function isemail(email){
//     (email.includes("@")&&email.includes(".com")) ? console.log(`Yes, ${email} is an email`) : console.log(`No, ${email} is not an email`);
// }
// circ=circumference(2);
// console.log(circ);
// isemail("a@b.com");

//topic 25: arrays
// let arr=[1,2,3,4,5,6,7];
// arr.reverse();
// even=["a","b","c"];
;// even.push(12);
// even.pop();
// even.pop();
// even.unshift(14);
// console.log(even);
// even.sort();
//even.reverse();

//topic 26: Spread Operator(...)
// // also used to join 2 arrays
// let arr=[1,2,3,4,5,62,71];
// even=["a","b","c"];
// newarr=[...even,...arr];
// console.log(newarr);
// for(let num of arr){
//     console.log(num);
// }
// max=Math.max(...arr);
// console.log(max);
// str="BroCOde";
// console.log([...str].join("-"));
// //also used to create shallow copy, when u change a shallow copy, no copy made to original
// copyarr=[...arr];
// //fullname example:
// function fullname(name){
//     return [...name].join(" ");
// }
// dname=["albus","percivral","wolfric","brian","dumbledore"];
// strdname=fullname(dname);
// console.log(strdname,typeof(strdname));

// topic 27: rest parameters(...)
// used to bundle seperate elements into an array
//strings into an array then join to a single string:
// function fullname(...name){
//     return name.join(" ");
// }

// strdname = fullname("albus", "percivral", "wolfric", "brian", "dumbledore");
// console.log(strdname);
//sum of all elements in an array:
// function sum(...numbers){
//     let sum=0;
//     for(number of numbers){
//         sum+=number;
//     }
//     return sum;
// }
// console.log((sum(1,2,30,10,200)));

arr=["a","b","c"];
console.log(`${arr.join("")}`);


