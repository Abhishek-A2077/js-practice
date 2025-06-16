let min = 1;
let max = 100;
let rnum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rnum);
let attempts=0;
document.getElementById("btn").onclick = function () {
    let guess = Number(document.getElementById("num").value);
  
    if (isNaN(guess)) {
        document.getElementById("result").textContent = "Enter a valid number.";
    } else if (guess > rnum) {
        document.getElementById("result").textContent = "Too high!";
        attempts++;
    } else if (guess < rnum) {
        document.getElementById("result").textContent = "Too low!";
        attempts++;
    } else {
        attempts++;
        document.getElementById("result").textContent = `You got it in ${attempts} attempts! The right number is ${rnum}`;
    }
};
