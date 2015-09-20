

////////=========setting the color picker===========/////////
var color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];


var currentColor = color;


function oneButton(grid) {
//one button
var white_but = document.createElement('button');
white_but.style.background = currentColor;
white_but.style.width = '25px';
white_but.style.height = '25px';
white_but.appendChild(document.createTextNode(""));
grid.appendChild(white_but);
}

function grid(rows, col) {
  var twoDimArr = [];
  // var rows = 4;
  // var col = 4;
  var numbers = 0;
  var pixelPainter = document.getElementById('pixelPainter');
  for(var i = 0; i < rows; i++){
    var row = [];
    for(var j = 0; j < col; j++){
      row.push(numbers++);
      oneButton(pixelPainter);

    }
    pixelPainter.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
//console.log(twoDimArr[3][3]);
}
grid(20,20);


// var header = document.createElement('h1');
// document.getElementById('header').innerHTML = "Hello World";

// var headerText = document.createTextNode(twoDimArr[3][2]);
// header.appendChild(headerText);
// document.body.appendChild(header);

////========erase button===========/////
var erase = 'white';

function erase() {

}


