// js es un lenguaje de programacion que corre en el navegador
//ECMAScript es el nombre real de js
// en js no se necesita el ; como en java es como python

//const me sirve para definir variables constantes cuyo valor se usa durante
//todo el resto de la aplicacion

//una variable let me permite la capacidad de modificarse durante la ejecucion de mi programa

// lo recomendable es utilizar const siempre para evitar errores!!!

function main(){

const nombre = "cesar"
console.log(nombre)


let num1 = 12
const num2 =13.7
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)

// las variables en js se comportan como las variables en python

num1 = "hola"
if (num1 % 2 == 0 || num2 == 0) {
    console.log("Es un numero par")
}else if (num1 % 2 == 1 || num2 == 1){
        console.log("Es un numero impar")
}else {
    console.log("Es un numero erroneo")
}

//en el caso de los for or while es cuando no hay problema que la variable sea let
let i = 0;
while (i<10){
    console.log(i)
    i++
}

for (let j=0; j<10; j++){
    console.log(j+21)
}
} 

function mostrarEnPantalla(){
    const inputName = document.getElementById("nombre");
    //console.log("inputName =", inputName);
    // console.log(inputName.value); 
    // inputName.value = "";

    const salida = document.getElementById("Salida");
    //salida.innerHTML = inputName.value;
    //salida.innerHTML = "<h3>"+inputName.value+"</h3>";
    //  salida.innerHTML = "<div class='row'>"+inputName.value+"</div>";
    //  inputName.value = "";

     let resultado = "";
     for (let i=0; i<5; i++){
         resultado += "<div class='col'>"+ inputName.value + " "  +(i+1) + "</div>";
     }
     salida.innerHTML = "<div class='row' 'row-cols-3'>"+ resultado + "</div>";
    inputName.value = "";

    function activarTexto(){
        const inputName = document.getElementById('nombre');
        inputName.removeAttribute("readonly");
    }

    function bloquearTexto(){
        const inputName = document.getElementById('nombre');
        inputName.setAttribute("readonly");
    }

}