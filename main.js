//var background = document.getElementsByTag('div');

//function to toggle change color on Hover
//background[i].addEventListener('mouseenter',changeColor);

//function (changeColor) {
///  this.classList.add('style.backgroundColor = "#000000"');
//};




//event listeners in a loop mouseenter mouseleave

/* var background = document.getElementsByName("bgcolor");
background.addEventListener("mouseenter",
  function(changeColor) {
    document.getElementsByTagName("div").style.backgroundColor = "#C4DB50";
  }, false
);
*/

/*
document.getElementsByTag("main").addEventListener("mouseenter",
  function() {
    document.getElementBytag("bgcolor").style.backgroundColor = "#C4DB50";
  }, false

);
*/
/*
var backgroundColor = document.querySelectorAll('#bgcolor');

document.querySelectorAll('#bgcolor').addEventListener("mouseenter",
  function () {
    document.querySelectorAll('#bgcolor').style.backgroundColor = "#CA1111";
  },
);
/*
for (i=0; i<backgroundColor; i++) {
  backgroundColor[i].addEventListener('mouseenter', changeColor);
  backgroundColor[i].addEventListener('mouseleave', changeColor);
}
*/


/*
console.log(backgroundColor); */


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


var bgFunction = document.getElementsByTag("div");

bgFunction.onmouseenter = function () {
  bgFunction.style.backgroundColor = "#DDDDDD";
}
