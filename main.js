
//Message on click
var clickOne = document.getElementById("box1");
clickOne.onclick = function() {
  alert("Oooh - so close but no cigar")
  //button on click
  document.getElementById("button").style.display = "inline";
}

var clickTwo = document.getElementById("box2");
clickTwo.onclick = function() {
  alert("DING DING DING - We have a winner")
  //button on click
  document.getElementById("button").style.display = "inline";
}

var clickThree = document.getElementById("box3");
clickThree.onclick = function() {
  alert("Oops, butter luck next time")
//button on click
  document.getElementById("button").style.display = "inline";
}

//Background Color Change
var bgFunction = document.getElementById("box1");
var bgFunction1 = document.getElementById("box2");
var bgFunction2 = document.getElementById("box3");


bgFunction.addEventListener("mouseover", function () {
  bgFunction.style.backgroundColor = "#DDDDDD";
},false);
bgFunction.addEventListener("mouseout", function () {
  bgFunction.style.backgroundColor = "yellow";
}, false);


bgFunction1.addEventListener("mouseover", function () {
  bgFunction1.style.backgroundColor = "#DDDDDD";
},false);
bgFunction1.addEventListener("mouseout", function () {
  bgFunction1.style.backgroundColor = "#4efcf9";
}, false);

bgFunction2.addEventListener("mouseover", function () {
  bgFunction2.style.backgroundColor = "#DDDDDD";
},false);
bgFunction2.addEventListener("mouseout", function () {
  bgFunction2.style.backgroundColor = "#7ffc41";
}, false);
