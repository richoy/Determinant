
//Variables
var h = 0, //Set value for the first time,
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


switch (matrix.filas) {
  case 2:
    matrixpordos(data);
    determinant = determinant2;
    break;

  case 3:
    valoresMatriz(h);
    menoresMatriz(h);
    calcularDeterminante(valores);

    for (let i = 0; i < cofactorMultiplicado.length; i++) {
      determinant = determinant + parseInt(cofactorMultiplicado[i]);
    }
  break;

  case 4:
    valoresMatriz(h);
    menoresMatriz(h);
    matrizMayor(valores)
    //console.log(valores);
    //console.log(menor);
    break;
}


document.getElementById('resultado').innerHTML = "El Determinante es: " + determinant;
  // console.log(determinant);
  // console.log(data);
  // console.log(valores);
  // console.log(menor);
  // console.log(cofactorMultiplicado);
  // console.log(cofactor);
})
