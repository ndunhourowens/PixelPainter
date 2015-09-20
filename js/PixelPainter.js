/////////======div id = pixelPainter=========/////////

var colorSelected = 'white';

function oneButton(grid) {
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
}
grid(20,20);


///=======div id - color picker ==========////
function colorPickerButton(grid, setColorsInPicker) {
  var color_but = document.createElement('button');
  color_but.style.background = setColorsInPicker;
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
    }
    colorPicker.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
}
colorPickerGrid();

//////==========div id = control - erase button =============////
// var remove = 'white';

var erase_but = document.createElement('button');
erase_but.style.background = "white";
erase_but.style.width = '200px';
erase_but.style.height = '100px';
erase_but.appendChild(document.createTextNode('ERASE'));
erase_but.addEventListener('click', function() {
    colorSelected = 'white';
  });

var remove = document.getElementById('controls');
remove.appendChild(erase_but);