var colorSelected = 'white';




function oneButton(grid) {
//one button
  var white_but = document.createElement('button');
  white_but.style.background = 'white';
  white_but.style.width = '25px';
  white_but.style.height = '25px';
  white_but.appendChild(document.createTextNode(""));
  grid.appendChild(white_but);
  white_but.addEventListener('click', function() {
    this.style.background = colorSelected;
  });
}

function grid(rows, col) {
  var twoDimArr = [];
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

////////=========setting the color picker===========/////////

///=======color picker grid==========////
function colorPickerButton(grid, setColorsInPicker) {
//one button
  var color_but = document.createElement('button');
  color_but.style.background = setColorsInPicker;
  // color_but.style.background = 'black';
  color_but.style.width = '25px';
  color_but.style.height = '25px';
  color_but.appendChild(document.createTextNode(""));
  grid.appendChild(color_but);
  color_but.addEventListener('click', function() {
    colorSelected = setColorsInPicker;
  });
}
function colorPickerGrid() {
  var color = [['red', 'orange'], ['yellow', 'green'], ['blue', 'purple'] ];

  var twoDimArr = [];
  var rows = 3;
  var col = 2;
  var numbers = 0;
  var colorPicker = document.getElementById('colorPicker');// connecting html and js
  for(var i = 0; i < rows; i++){
    var row = [];
    for(var j = 0; j < col; j++){
      row.push(numbers++);
      var setColorsInPicker = color[i][j];
      colorPickerButton(colorPicker, setColorsInPicker);
      console.log(color[i][j]);

    }
    colorPicker.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
}
colorPickerGrid();

//////==========save the color clicked into memory==========////