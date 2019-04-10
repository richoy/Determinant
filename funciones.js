
// Funcion para crear matriz
function createForm(){
  //borrar tabla anterior
  document.getElementById('matriz').innerHTML = ""
    matrix.filas = h;
    matrix.columnas = h;
  //creación de nueva tabla
    for (let i = 0; i < matrix.filas; i++) {
      let row = document.createElement("TR");
        for (let j = 0; j < matrix.columnas; j++) {
          let columns = document.createElement("TD");
          let forma = document.createElement("input");
          forma.setAttribute("type","number");
          forma.setAttribute("id",[i]+[j])
          columns.appendChild(forma);
          row.appendChild(columns);
        }
        var creacion = document.getElementById('matriz');
        creacion.appendChild(row);
    }

    boton2.style.display = 'inline';
}

//Funcion para obtener tamaño de matriz
function run(valor){
  h = valor;
  document.getElementById("dos").style.background = "#635bff";
  document.getElementById("tres").style.background = "#635bff";
  document.getElementById("cuatro").style.background = "#635bff";
  createForm();
  document.getElementById('resultado').innerHTML = "";
  let xc = "";
  switch (h) {
    case 2:
      xc = "dos"
      break;
    case 3:
      xc = "tres";
      break;
    case 4:
      xc = "cuatro";
      break;

  }

document.getElementById(xc).style.background = "#3f00ff";

}

//Funcion para obtener los valores de la tabla
function getData(){
  data = [];
  lineauno = [];
  for (let i = 0; i < matrix.filas; i++) {
      for (let j = 0; j < matrix.columnas; j++) {
        let c = [i] + [j];
        let valores = document.getElementById(c);
        data.push(valores.value);
      }
  }

}

//calculo matrix 2x2
function matrixpordos(calcular){
  determinant2 = 0;
  let a  =  parseInt(calcular[0]);
  let b =   parseInt(calcular[1]);
  let c =   parseInt(calcular[2]);
  let d =   parseInt(calcular[3]);
  determinant2 = (a*d)-(b*c);

}

//calculo de valores de Matriz a multiplicar por el menor de la matrix
function valoresMatriz(filas){
  let primerafila = [];
  // Valores a multiplicar por el menor de la matrix
  for (let i = 0; i < filas; i++) {
        let v = "0" + [i];
        primerafila.push(v);
  }
  return primerafila;
}

//Menores de Matriz
function menoresMatriz(filas){
  let matrizmenor = [];
  for (let i = 1; i < filas; i++) {
      for (let j = 0; j < filas; j++) {
        let c = [i] + [j];
        matrizmenor.push(c);
        }
  }
  return matrizmenor;
}

//calcular los cofactores
function calculoCofactores(v,matrizmenor){
  let calculo = [];
  //console.log("hola");
  for (let i = 0; i < matrizmenor.length; i++) {
    let t = matrizmenor[i].charAt(1);
    if (t == v) {
      continue;
    }else {
      calculo.push(matrizmenor[i]);
    //  console.log(menor[i]);
    }
  }
  return calculo;
}

//calculo determinante 2x2 por cofactores
function dospordos(calcular){
  determinant2 = 0;
  let a  = document.getElementById(calcular[0]);
  let b =  document.getElementById(calcular[1]);
  let c =  document.getElementById(calcular[2]);
  let d =  document.getElementById(calcular[3]);
  determinant2 = ((a.value)*(d.value))-((b.value)*(c.value));
}

//calcular determinante
function calcularDeterminanteTres(matriz,matrizmenor){
  cofactor = [];
  let determinant3 = 0;
  for (let i = 0; i < matriz.length; i++) {
    let v = matriz[i].charAt(1);
    let x = document.getElementById(matriz[i]);
    cofactor = calculoCofactores(v,matrizmenor);
    // console.log(matriz[i]);
    // console.log(cofactor);
    dospordos(cofactor);
    cofactorMultiplicado[i] = x.value * determinant2 * Math.pow(-1, i);
    // console.log(determinant2);
    // console.log(x.value);
    // console.log(cofactorMultiplicado[i]);
  }

  for (let i = 0; i < cofactorMultiplicado.length; i++) {
    determinant3 = determinant3 + parseInt(cofactorMultiplicado[i]);
  }
  //console.log(determinant3);
  return determinant3;
}


function matrizMayor(matriz,matrizmenor){
  let pr = [],
      vs = [],
      mn = [],
      determinant4 = 0,
      determinant5=0,
      cofactor4 = [];
    for (let i = 0; i < matriz.length; i++) {
    let v = matriz[i].charAt(1);
    pr = calculoCofactores(v,matrizmenor);
    vs = calculoPrimera(pr);
    mn = cofactor3(pr);
    determinant4 = calcularDeterminanteTres(vs,mn)
    cofactor4.push(determinant4);
    console.log(pr);
    console.log(vs);
    console.log(mn);
    console.log(determinant4);

    }
    console.log(cofactor4);
    for (let i = 0; i < matriz.length; i++) {
      let multiplicador = document.getElementById(matriz[i]);
      //console.log(multiplicador.value);
      determinant5 = determinant5 +(multiplicador.value * parseInt(determinant4[i]) * Math.pow(-1, i));
    }
  return determinant5;
}

function calculoPrimera (arreglo) {
  let primera = [];
  for (let i = 0; i < 3; i++) {
    primera.push(arreglo[i])
  }
  return primera;
}

function cofactor3(valor){
  let cofactor3 = [];
  for (let i = 3; i < valor.length; i++) {
   cofactor3.push(valor[i]);
  }
  return cofactor3;
}







// function matrizMayor(matriz,matrizmenor){
//   let cofactor4 = [];
//   let determinant4 = 0;
//   let menortres = [];
//   for (let i = 0; i < matriz.length; i++) {
//     let v = matriz[i].charAt(1);
//     let x = document.getElementById(valores[i]);
//     cofactor = calculoCofactores(v,matrizmenor);
//     cofactor2 = cofactor3(cofactor);
//     primerafila = calculoPrimera (cofactor2);
//     // console.log(primerafila);
//     // console.log(cofactor2);
//     cofactor4.push(calcularDeterminanteTres(primerafila,cofactor2));
//     //console.log(cofactor4[i]);
//   }
//   for (let i = 0; i < cofactor4.length; i++) {
//     determinant4 = determinant4 + parseInt(cofactor4[i]);
//   }
//   return determinant4;
// }
//FALTA MULTIPLICAAAAAAAR el problema esta en que la matriz que calcula no es 3x3

//sacar valores linea Funcion
