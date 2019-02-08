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

var backgroundColor = document.querySelectorAll('bgcolor');

function changeColor () {
  this.classList.toggle('style.backgroundColor = "#000000"');
};

for (i=0; i<backgroundColor; i++) {
  backgroundColor[i].addEventListener('mouseenter', changeColor);
  backgroundColor[i].addEventListener('mouseleave', changeColor);
}



console.log(backgroundColor);
