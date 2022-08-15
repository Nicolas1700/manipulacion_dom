/*
console.log("Manipulacion del DOM con JavaScript");

//Escuchar etiquetas de HTML

// Para buscar por el primer elemento que se
// encunetre en el DOM
document.querySelector(""); 

// Buscar por clase
document.querySelector(".nombreDeLaClase"); 

// Busca por id 
document.querySelector("#nombreId"); 

// Para ver todos lod atributos de un elmento HTML

console.log({ Se imprime como objeto el elemento});

// Para seleccionar todas las etiquetas con ese
// determinado identidicador

document.querySelectorAll("nombreDelIdentificador");

const h1 = document.querySelector('h1');
const parrafito = document.querySelector('#pid');
const input = document.querySelector('input');

h1.innerHTML = "¡Esto esta melo..!";
parrafito.innerText = "El cambio al id de parrafito";

// Para lo que tiene los atributos
parrafito.getAttribute('class');

// Para modificar atributos
// 1) El atributo, 2) lo que queremos en este
parrafito.setAttribute('id',"123");

// Para modificar expecificamente las clases

// Agrega una clase
parrafito.classList.add("otra_clase");

// Elimina una clase
parrafito.classList.remove("nada");

// Para agregar un valor por defecto
input.value = "Valorcito";

// Para crear un elemento
const img = document.createElement('img');
// Le agregamos la ruta de la imgen
img.setAttribute('src', "https://www.tailorbrands.com/wp-content/uploads/2021/06/Brand-marks-1.jpg");
// Lo tenemos que agregar sobre un elemento que ya existe
// Borramos el contenido de parrafo
parrafito.innerHTML = "";
// En este caso lo agregamos dentro del elemento parrafo
parrafito.append(img);


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalulular');
const pResult = document.querySelector('#result');

// 1) El nombre del evento
// 2) código JavaScript que queramos llamar
btn.addEventListener('click',btnOnClick);
// IMPORTANTE: Al llamara una función, dentro de este método
// no se le pone paréntesis


function btnOnClick (event) {
    sumImputs = parseInt(input1.value) + parseInt(input2.value);
    event.preventDefault()
    pResult.innerText = "El resultado de la operación es: " + sumImputs;
}

//Separado

const link = document.getElementById('ruta');
const nombre = document.getElementById('inpNom');
const btnNom =  document.getElementById('btnNom');
console.log(btnNom);

btnNom.addEventListener('click', aVerQuePasa);

function aVerQuePasa (event) {
    event.preventDefault();
    console.log("Funciona ");
}
*/
const credenciales = document.querySelector('#credenciales');

credenciales.addEventListener('copy',advertenciaCredenciales);

function advertenciaCredenciales (){
    console.log("¿Porque las copeaste si te dije que no?");
}