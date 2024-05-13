// COIN FLIP SIMULATOR

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", dice);

// Count variables
var numHeads = 0;
var numTails = 0;
var val1 = 0;
var val2 = 0;
var num1s = 0;
var num2s = 0;
var num3s = 0;
var num4s = 0;
var num5s = 0;
var num6s = 0;
var sum;

function dice() {
  var randNum = Math.random().toFixed(2);
  var randNum2 = Math.random().toFixed(2);

  if (randNum2 < 0.16) {
    document.getElementById("output2").innerHTML = "<img src='img/1.png'>";
    num1s++;
    document.getElementById("1out").innerHTML = num1s;
    val2 = 1;
  } else if (randNum2 < 0.33) {
    document.getElementById("output2").innerHTML = "<img src='img/2.png'>";
    num2s++;
    document.getElementById("2out").innerHTML = num2s;
    val2 = 2;
  } else if (randNum2 < 0.5) {
    document.getElementById("output2").innerHTML = "<img src='img/3.png'>";
    num3s++;
    document.getElementById("3out").innerHTML = num3s;
    val2 = 3;
  } else if (randNum2 < 0.66) {
    document.getElementById("output2").innerHTML = "<img src='img/4.png'>";
    num4s++;
    document.getElementById("4out").innerHTML = num4s;
    val2 = 4;
  } else if (randNum2 < 0.83) {
    document.getElementById("output2").innerHTML = "<img src='img/5.png'>";
    num5s++;
    document.getElementById("5out").innerHTML = num5s;
    val2 = 5;
  } else {
    document.getElementById("output2").innerHTML = "<img src='img/6.png'>";
    num6s++;
    document.getElementById("6out").innerHTML = num6s;
    val2 = 6;
  }

  if (randNum < 0.16) {
    document.getElementById("output").innerHTML = "<img src='img/1.png'>";
    num1s++;
    document.getElementById("1out").innerHTML = num1s;
    val1 = 1;
  } else if (randNum < 0.33) {
    document.getElementById("output").innerHTML = "<img src='img/2.png'>";
    num2s++;
    document.getElementById("2out").innerHTML = num2s;
    val1 = 2;
  } else if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src='img/3.png'>";
    num3s++;
    document.getElementById("3out").innerHTML = num3s;
    val1 = 3;
  } else if (randNum < 0.66) {
    document.getElementById("output").innerHTML = "<img src='img/4.png'>";
    num4s++;
    document.getElementById("4out").innerHTML = num4s;
    val1 = 4;
  } else if (randNum < 0.83) {
    document.getElementById("output").innerHTML = "<img src='img/5.png'>";
    num5s++;
    document.getElementById("5out").innerHTML = num5s;
    val1 = 5;
  } else {
    document.getElementById("output").innerHTML = "<img src='img/6.png'>";
    num6s++;
    document.getElementById("6out").innerHTML = num6s;
    val1 = 6;
  }

  sum = +val1 + +val2;
  document.getElementById("sum").innerHTML = sum;
}

function btnClicked() {
  // Generate a random number
  var randNum = Math.random();
  console.log(randNum);

  // Simulate the coin flip
  if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src='img/heads.png'>";
    numHeads++;
    document.getElementById("hout").innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML = "<img src='img/tails.png'>";
    numTails++;
    document.getElementById("tout").innerHTML = numTails;
  }
}
