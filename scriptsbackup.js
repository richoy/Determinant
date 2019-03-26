
function createForm(){
  var matrix = document.createElement("form");
  var primero = document.createElement("input");
  matrix.appendChild(primero);
  var creacion = document.getElementById('matriz');
  creacion.appendChild(matrix);
}











function createForm(){
  let matrix = document.createElement("form");
  let al = [];
  for (var i = 0; i < h; i++) {
    al.push (document.createElement("input"));
    matrix.appendChild(al[i]);
  };


  var creacion = document.getElementById('matriz');
  creacion.appendChild(matrix);
}






function createForm(){
  let matrix = document.createElement("form");
  let horizontal = [];
  let vertical = [];
  for (var i = 0; i < h; i++) {




    for (var j = 0; i < h; i++) {
      vertical.push (document.createElement("input"));
      matrix.appendChild(vertical[i]);
    }


    horizontal.push (document.createElement("input"));
    matrix.appendChild(horizontal[i]);



  };


  var creacion = document.getElementById('matriz');
  creacion.appendChild(matrix);
}
