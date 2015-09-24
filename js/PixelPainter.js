/////////======create var to have smaller string=========/////////
var r = 'red';
var o = 'orange';
var y = 'yellow';
var g = 'green';
var b = 'blue';
var p = 'purple';
var bk = 'black';
var pk = 'pink';
var w = 'white';
var ch = 'chocolate';
var sg = 'slategray';
var sb = 'skyblue';
var pw = 'papayawhip';


/////////======div id = pixelPainter=========/////////

var colorSelected = w;
var painted = [];
var twoDimArr = [];
function cell(grid) {
  var divCell = document.createElement('div');
  divCell.style.border = '1px black solid';
  divCell.style.background = w;
  divCell.style.width = '25px';
  divCell.style.height = '25px';
  divCell.appendChild(document.createTextNode(""));
  grid.appendChild(divCell);
  // divCell.addEventListener('click', function() {
  //   this.style.background = colorSelected;
  // });
}

function grid(rows, col) {
  var count = 0;
  var table = document.createElement('table');
  var pixelPainter = document.getElementById('pixelPainter');
  for(var i = 0; i < rows; i++){
    var row = table.appendChild(document.createElement("TR"));
    for(var j = 0; j < col; j++){
      var cell = row.appendChild(document.createElement("TD"));
      twoDimArr.push(cell);
      cell.setAttribute('name', 'grid');
      cell.setAttribute('id', count++);
      cell.style.background = w;
      cell.addEventListener('click', function(evt) {
        this.style.background = colorSelected;
        painted.push(evt.target);


      });
      // console.log(cell.getAttribute('id'));
      // console.log('twoDim', twoDimArr);
      // console.log('painted', painted);
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
  var color = [[r,o,y],[g,b,p],[bk,w,ch],[sg,sb,pw]];


  var twoDimArr = [];
  var rows = 4;
  var col = 3;
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
// var remove = w;

var erase_but = document.createElement('button');
// erase_but.style.background = "w";
erase_but.appendChild(document.createTextNode('ERASE'));
erase_but.addEventListener('click', function() {
    colorSelected = w;
  });

var remove = document.getElementById('controls');
remove.appendChild(erase_but);


//////==========div id = control - clear button =============////


var clear_but = document.createElement('button');
// clear_but.style.background = "w";
clear_but.appendChild(document.createTextNode('CLEAR'));
clear_but.addEventListener('click', function() {
    location.reload();
  });

var remove = document.getElementById('controls');
remove.appendChild(clear_but);

//////==========read the colors of the each button =============////

//empty array that reads the color of the picture
var str = '#';

var save_but = document.createElement('button');
save_but.appendChild(document.createTextNode('SAVE'));
save_but.addEventListener('click', function() {
  for(var u = 0; u < twoDimArr.length; u++) {
    str += twoDimArr[u].id + ':' + twoDimArr[u].style.background + '/';
  }
  window.location.hash = str;

});
remove.appendChild(save_but);

//////==========load button =============////

var load_but = document.createElement('button');
load_but.appendChild(document.createTextNode('LOAD'));
load_but.addEventListener('click', function() {
  //get the url
  //pass it through the decoder
    //have to take the string and change it back into an array
    //reproduce the array
    url = window.location.hash.substring(1);
    var index = endOfChunk = 0;
    var list = new Array();
    while (url.length > 1 ) {  // keeping '1' because last '/' will be returned
      endOfChunk = url.indexOf('/');
      list.push(url.substring(index, endOfChunk));
      url = url.substring(endOfChunk + 1);
    }

    for(var i =0; i < list.length; i++) {
      var temp = list[i];
      var index = temp.indexOf(':');
      var position = temp.substring(0,index);
      var color = temp.substring(index+1);
      document.getElementById(position).style.background = color;
    }




});
remove.appendChild(load_but);

// var cellInfo = {
//    id: twoDimArr[u].id,
//    color: twoDimArr[u].style.background
// };