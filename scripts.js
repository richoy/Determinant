
//Variables
var size = document.getElementById('tamaño'), // to get the size of the matriz
    h = size.options[size.selectedIndex].value, //Set value for the first time
    boton1 = document.getElementById('boton1'),
    boton2 = document.getElementById('boton2'),
    valores = [],
    menor = [],
    data = [];
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
   getData();
   menoresMatriz();
   //calculo();
})
