
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
function run(){
  size = document.getElementById('tamaño');
  h = size.options[size.selectedIndex].value;
}

//Funcion para obtener los valores de la tabla
function getData(){
  data = [];
  for (let i = 0; i < matrix.filas; i++) {
      for (let j = 0; j < matrix.columnas; j++) {
        let c = [i] + [j];
        let valores = document.getElementById(c)
        data.push(valores.value);
          console.log(c);
          console.log(typeof(c));
      }
  }
  console.log(data);
}

//calculo determinante 2x2
function dospordos(){
  let a  =  parseInt(data[0]);
  let b =   parseInt(data[1]);
  let c =   parseInt(data[2]);
  let d =   parseInt(data[3]);
  let determinant = Math.abs((a*d)-(b*c));
  console.log(determinant);
}

//calculo de menores de Matriz
function menoresMatriz(){
  valores = [];
  for (let i = 0; i < matrix.filas; i++) {
        let v = "0" + [i];
        console.log(v);
        console.log(typeof(v));
        valores.push(v);
  }
  console.log(valores);

  for (let i = 0; i < valores.length; i++) {
    let pr = valores[i];
    for (let j = 1; i <= valores.length; i++) {
      if (pr.charAt(1) == i) {
        continue;
      }else {
      let a = [j]+[i];
      menor.push(a);
      console.log(menor);
      }

    }
  }

}

function calculo(){

  //dospordos();
  menoresMatriz();
}
