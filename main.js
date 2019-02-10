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



document.getElementById("box1").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("box1").innerHTML = "Oooh - so close but no cigar";
};



document.getElementById("box2").onclick = function() {myFunction1()};

function myFunction1() {
  document.getElementById("box2").innerHTML = "DING DING DING - We have a winner";
}

document.getElementById("box3").onclick = function() {myFunction2()};

function myFunction2() {
  document.getElementById("box3").innerHTML = "Oops, butter luck next time";
}
