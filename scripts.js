
//Variables
var size = document.getElementById('tamaño'), // to get the size of the matriz
    h = size.options[size.selectedIndex].value, //Set value for the first time
    boton1 = document.getElementById('boton1'),
    boton2 = document.getElementById('boton2'),
    valores = [],
    menor = [],
    data = [],
    cofactor = [],
    cofactorMultiplicado = [],
    determinant2 = 0,
    determinant = 0;
var matrix = {
      filas: 0,
      columnas: 0
    };
boton2.style.display = 'none';

//creacion de matriz
boton1.addEventListener('click',function() {
   createForm();
})


//calculo del determinante
boton2.addEventListener('click',function() {
  valores = [ ],
  menor = [ ],
  data = [ ],
  cofactor = [ ],
  determinant = 0;

  let verificacion = true;

  getData();
 // Verificacion de espacios libres *********************
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i] == "") {
  //     verificacion = false;
  //   }
  // }
  //
  // if (verificacion == false) {
  //   alert("There are values missing in the matrix");
  // } else {
  //   valoresMatriz();
  //   menoresMatriz();
  //   calcularDeterminante();
  //
  //   console.log(data);
  //   console.log(valores);
  //   console.log(menor);
  //
  // }
  if (matrix.filas == 2) {
    matrixpordos(data);
    determinant = determinant2;
  }else {
    valoresMatriz();
    menoresMatriz();
    calcularDeterminante();

    console.log(data);
    console.log(valores);
    console.log(menor);
    console.log(cofactorMultiplicado);

    for (let i = 0; i < cofactorMultiplicado.length; i++) {
      determinant = determinant + parseInt(cofactorMultiplicado[i]);
    }
  }

  console.log(determinant);

})
