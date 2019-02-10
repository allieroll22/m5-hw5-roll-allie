
var clickOne = document.getElementById("box1");
clickOne.onclick = function() {
  alert("Oooh - so close but no cigar")
}

var clickTwo = document.getElementById("box2");
clickTwo.onclick = function() {
  alert("DING DING DING - We have a winner")
}

var clickThree = document.getElementById("box3");
clickThree.onclick = function() {
  alert("Oops, butter luck next time")
}

var bgFunction = document.querySelectorAll("div");
bgFunction.onmouseenter = function () {
  bgFunction.style.backgroundColor = "#DDDDDD";
};

/*
bgFunction.addEventListener("onmouseenter",function () {
  bgFunction.style.backgroundColor = "#DDDDDD";
}, false);


/*
document.querySelectorAll("div").addEventListener("mouseenter", mouseEnter);
function mouseEnter () {
  document.getElementsByTagName("div").style.backgroundColor = "black";
}
*/
