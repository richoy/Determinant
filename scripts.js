
//Variables
var h = 0, //Set value for the first time,
    boton2 = document.getElementById('boton2'),
    valores = [],
    menor = [],
    data = [],
    cofactor = [],
    cofactor2 = [],
    cofactorMultiplicado = [],
    lineauno = [],
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
 // Verificacion de espacios libres
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "") {
      verificacion = false;
    }
  }

  if (verificacion == false) {
    alert("There are values missing in the matrix");
  } else {
    switch (matrix.filas) {
      case 2:
        matrixpordos(data);
        determinant = determinant2;
        break;

      case 3:
        valores = valoresMatriz(h);
        menor = menoresMatriz(h);
        console.log(valores);
        console.log(menor);
        determinant = calcularDeterminanteTres(valores, menor);
      break;

      case 4:
        valores = valoresMatriz(h);
        menor = menoresMatriz(h);
        determinant = matrizMayor(valores,menor)
        break;
    }

  }





document.getElementById('resultado').innerHTML = "El Determinante es: " + determinant;

})
