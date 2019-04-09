
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
function valoresMatriz(){
  valores = [];
  // Valores a multiplicar por el menor de la matrix
  for (let i = 0; i < matrix.filas; i++) {
        let v = "0" + [i];
        valores.push(v);
  }
}

//Menores de Matriz
function menoresMatriz(){

  for (let i = 1; i < matrix.filas; i++) {
      for (let j = 0; j < matrix.columnas; j++) {
        let c = [i] + [j];
        menor.push(c);
        }
  }

}

//calcular los cofactores
function calculoCofactores(v){
  cofactor = [];
  for (let i = 0; i < menor.length; i++) {
    let t = menor[i].charAt(1);
    if (t == v) {
      continue;
    }else {
      cofactor.push(menor[i]);
      console.log(menor[i]);
    }
  }
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
function calcularDeterminante(){
  for (let i = 0; i < valores.length; i++) {
    let v = valores[i].charAt(1);
    let x = document.getElementById(valores[i]);
    calculoCofactores(v);
    dospordos(cofactor);
    cofactorMultiplicado[i] = x.value * determinant2 * Math.pow(-1, i);


  }
}
