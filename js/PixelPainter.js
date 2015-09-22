/////////======div id = pixelPainter=========/////////

var colorSelected = 'white';

function cell(grid) {
  var divCell = document.createElement('div');
  divCell.style.border = '1px black solid';
  divCell.style.background = 'white';
  divCell.style.width = '25px';
  divCell.style.height = '25px';
  divCell.appendChild(document.createTextNode(""));
  grid.appendChild(divCell);
  divCell.addEventListener('click', function() {
    this.style.background = colorSelected;
  });
}

function grid(rows, col) {
  var twoDimArr = [];
  var count = 0;
  var table = document.createElement('table');
  var pixelPainter = document.getElementById('pixelPainter');
  for(var i = 0; i < rows; i++){
    var row = table.appendChild(document.createElement("TR"));
    for(var j = 0; j < col; j++){
      var cell = row.appendChild(document.createElement("TD"));
      cell.setAttribute('name', 'grid');
      cell.setAttribute('id', count++);
      cell.addEventListener('click', function() {
        this.style.background = colorSelected;
      });
    }

  }
  pixelPainter.appendChild(table);
}
grid(10,10);


///=======div id - color picker ==========////
function colorPickerButton(grid, setColorsInPicker) {
  var color_but = document.createElement('button');
  color_but.style.background = setColorsInPicker;
  color_but.style.width = '70px';
  color_but.style.height = '70px';
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
// erase_but.style.background = "white";
erase_but.appendChild(document.createTextNode('ERASE'));
erase_but.addEventListener('click', function() {
    colorSelected = 'white';
  });

var remove = document.getElementById('controls');
remove.appendChild(erase_but);


//////==========div id = control - clear button =============////


var clear_but = document.createElement('button');
// clear_but.style.background = "white";
clear_but.appendChild(document.createTextNode('CLEAR'));
clear_but.addEventListener('click', function() {
    location.reload();
  });

var remove = document.getElementById('controls');
remove.appendChild(clear_but);

//////==========read the colors of the each button =============////

//empty array that reads the color of the picture
var savePic = [];


//for loop to get the color of the button
