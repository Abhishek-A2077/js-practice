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
//example 2:
// function multiply(...numarr){
//     return numarr.reduce((acc,x)=>acc*x);
// }
// console.log(multiply(1,2,3,3,2));

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
// arr=["a","b","c"];
// console.log(`${arr.join("")}`);

// //map() function:
// arr=[2,3,4,5,6];
// arr=arr.map(n=>n*2);
// console.log(arr);
// //example 2:
// strings=["ab","cd","ef","gh","ij"];
// newstrings=strings.map(string=>string+"h");
// console.log(newstrings);

// //arguments object in js functions, for n number of arguments
// function add(x,y){
//     let result=x+y;
//     for(let i=2;i<arguments.length;i++){
//         result+=arguments[i];
//     }
//     return result;
// }
// console.log(add(2,4,6,8));

//reduce() function:
// arr=[2,4,6,8];
// sum=arr.reduce((acc,x)=>acc+x,0);
// console.log(sum);

//arrow functions
// arr=[2,4,6];
// let sum = (x,y) =>x+y;
// res=sum(arr[1],arr[2]);
// console.log(res);
//used in map:
// arr=["this","is","map"];
// newarr=arr.map(str=>str.toUpperCase());
// console.log(newarr);

// //topic: addEventListener(event,function(){ });
// btn=document.getElementById("btn");
// btn.addEventListener("click",func=()=>(alert("click"),console.log("click")));
// btn.addEventListener("mouseover",funct=()=>(console.log("mouseover")));
// btn.addEventListener("keydown",funct=()=>(console.log("keydown")));

// //fetch()
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('Error:', error));

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:',error))

// //date time
// const StartDate=new Date ("2027-02-01")
// const EndDate=new Date("2027-03-01")
// let Leap=new Date("2027-02-29")
// // console.log(EndDate,StartDate)
// if(Leap<EndDate && Leap>StartDate){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }

// //callback
// function IsDateBetween(Date,StartDate,EndDate,Callback){
//     let boolean;
//     if (Date>StartDate&&Date<EndDate){
//         boolean= true
//     }
//     else{
//         boolean= false
//     }
//     Callback(boolean)
// }

// function Display(IsDateBetween){
//     document.getElementById("Result").textContent= IsDateBetween ? "yes" : "No"
// }
// const StartDate=new Date ("2028-02-01")
// const EndDate=new Date("2028-03-01")
// let Leap=new Date("2028-02-29")
// IsDateBetween(Leap,StartDate,EndDate,Display)

// // forEach()
// let arr=[]
// function double(n){
//     arr.push(n*2)
// }
// newarr=[1,2,3,4]
// newarr.forEach(double)
// console.log(arr)

// // forEach() with 3 args
// function double(element,index,array){
//     array[index]=element*2
// }
// narr=[1,2,3,4,5]
// narr.forEach(double)
// console.log(narr)

// // forEach with 3 args with arrow function
// narr=[1,2,3,4,5]
// narr.forEach((n,i,arr)=>arr[i]=n*2)
// console.log(narr)

// // or, use map():
// narr=[1,2,3,4,5]
// newnarr=narr.map(double)
// console.log(newnarr)
// function double(element){
//     return element*2
// }

// //filter()
// astr='abcdefgh'
// str=[...astr].filter(element=>element!=="a" && element!=="b")
// console.log(str)

// arr=[5,10,15]
// n=arr.reduce((acc,n)=>acc+n)
// console.log(n)


// // Explanation of forEach,filter,map,reduce with their parameters
// forEach((element)=>...) or forEach((element,index,array)=>...) (returns nothing)
// array=filter((element)=>...)
// array=map((element)=>...)
// value=array.reduce((accumulator,element)=>...)

// // setTimeout() and arrow functions
// arrs=[1,2,3,4]
// setTimeout(()=>{let narrs=[]; 
//     for(arr of arrs){narrs.push(arr*2)}; 
//     console.log(narrs)},3000)

// //objects (made of key:value pairs)
// const person={name:"raj",age:21,func:function(){console.log("this is a method")}}
// person.func()
// console.log(person.name,person.age)

// const person={name:"raj",age:21,func:()=>console.log("this is a method")}
// person.func()
// console.log(person.name,person.age)

// //this keyword
// const person={name:"raj",age:21,func2:()=>"the 2nd function",func:function(){console.log(`this is a method, to show ${this.func2()}`)}}
// person.func()
// console.log(person.name,person.age)

// // constructor (used to create new objects with same keys different values)
// function student(name,age){
//     this.name=name;
//     this.age=age;
// }

// const ney=new student("guy",60)
// console.log(ney.name,ney.age)

// // class and constructor
// class person{
//     constructor(pname,age){
//         this.pname=pname
//         this.age=age
//     }
// }
// const person1=new person("ab",21)
// console.log(person1.pname,person1.age)

//static in class (static object in a class belongs to class itself and not an object created from the class)
// class person{
//     static name="a"
//     static age=21
//     static display(){
//         console.log("displays")
//     }
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// console.log(person.name,person.age)
// person.display()
// let person1=new person("b",32)
// console.log(person1.name,person1.age)

// //date time
// let startDate=new Date("2024-01-30")
// let endDate=new Date("2028-03-01")
// let date=new Date("2024-02-29") //default year needs to be a leap year, or else if 2021 it defaults to 2021-03-01
// function isBetween(startDate,endDate,date){
//     if(date>=startDate&&date<=endDate){
//         console.log(`yes it includes ${date}`)
//     }
//     else{
//         bool=false
//         console.log(`no it does not include ${date}`) 
//     }
// }
// function isCheckLeap(startDate,endDate){
    
//     if(startDate>endDate){
//         console.log("invalid date range")
//     }
//     else if(startDate.getFullYear()==endDate.getFullYear()){
//         let yr=startDate.getFullYear()
//         date.setFullYear(yr)
//     }
//     else if(startDate.getFullYear()!=endDate.getFullYear()){
//         yrRange=endDate.getFullYear()-startDate.getFullYear()
//         console.log(yrRange)
//         let yr=startDate.getFullYear()
//         for(let i=0;i<=yrRange;i++){
//             console.log(yr)
//             let checkDate=new Date(date.getTime())
//             checkDate.setFullYear(yr)
//             if(date.getMonth()==checkDate.getMonth()){ //if valid date, month is equal, i.e, february. else, goes to march, so not equal
//                 date.setFullYear(yr)
//                 isBetween(startDate,endDate,date)
//             }
//             else{
//                console.log(`not a leap year`) 
//             }
            
//             yr++
//         }
//     }
// }

// isCheckLeap(startDate,endDate)

// //Promises(resolve, then)(reject,catch)
// function goSomewhere(){
//     return new Promise((resolve,reject)=>{
//         let went=true
//         if(went){
//             resolve("You reached the destination")
//         }
//         else{
//             reject("You did not reach the destination")
//         }
//     })
    
// }
// function doSomething(){
//     return new Promise((resolve,reject)=>{
//         let done=true
//         if(done){
//             resolve("You have done the thing")
//         }
//         else{
//             reject("You have not done the thing")
//         }
//     })

// }
// function returnHome(){
//     return new Promise((resolve,reject)=>{
//         let returned=false
//         if(returned){
//             resolve("You have returned home")
//         }
//         else{
//             reject("You have not returned home")
//         }
//     })
    
// }
// goSomewhere().then((value)=>{console.log(value);return doSomething()})
//              .then((value)=>{console.log(value);return returnHome()})
//              .then((value)=>console.log(value))
//              .catch((error)=>console.log(error))



//Async/Await




//json- can be an array [1,2,3] or can be an object {name:"a",age:19, arr=[1,2,3]} or, [ {name:"a",age:19, arr=[1,2,3]}, {name:"b",age:18}]
// json.stringify()
// json.parse
//.json is used to convert the raw response from fetch to the actual json format
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json())
                                                   .then((data)=>console.log(data))
                                                   .catch((error)=>console.log(error))