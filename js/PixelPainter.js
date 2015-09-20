var currentColor = "blue";


function oneButton() {
//one button
var white_but = document.createElement('button');
white_but.style.background = currentColor;
white_but.style.width = '25px';
white_but.style.height = '25px';
white_but.appendChild(document.createTextNode(""));
document.body.appendChild(white_but);
}


var twoDimArr = [];
var rows = 4;
var col = 4;
var numbers = 0;

for(var i = 0; i < rows; i++){
  var row = [];
  for(var j = 0; j < col; j++){
    row.push(numbers++);
    oneButton();
  }
  twoDimArr.push(row);

  //oneButton();

// console.log(twoDimArr[i]);

}
//console.log(twoDimArr[3][3]);


var header = document.createElement('h1');
// document.getElementById('header').innerHTML = "Hello World";

var headerText = document.createTextNode(twoDimArr[3][2]);
header.appendChild(headerText);
document.body.appendChild(header);

////========select color===========/////



