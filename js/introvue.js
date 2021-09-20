
//Arrow Function <==> Lambda param: body 
//Funciones flecha
// este set interval va a ir ejecutando cosas cada segundo dependiento del intervalo que uno define

function old(){
    let contador = 0;
    setInterval(()=> {
        const spanNumero = document.getElementById("numero");
        //aca se usa innerHTML instead of value because value is only for the inputs
        //contador es una etiqueta html y esa etiqueta lo que tiene es un contenido. 
        //El innerHTML hace referencia al contenido que esta en las etiquetas en este caso el '0' que esta dentro de la etiqueta span
        spanNumero.innerHTML = contador++
    }, 1000);
}

// Como crear el mismo contador de arriba pero en vue
//1. Hay que crear una aplicacion una aplicacion app
//2. y hay que hacerle un mount de un elemento 

//Syntax:
//Vue.createApp(config).mount(element)

//montar significa que voy a tener una constante que es counter la cual va a tener un objeto data
//y ese metodo data va a retornar un valor que es un objeto que es counter
const Counter = {
    data(){
        return{
            counter: 0,
            maria: 10,
            message: "hola esto es vue"
        }
    },
    //cuando ya se monte el componente empiece a mostrar el contador (ciclo de vida de vue explicado en web page)
    mounted(){
        setInterval(() => {
            this.counter++;
        }, 1000);
    }
}
 

//Esto dice necesito configurar un app en vue. Esa app tiene un metodo data y dentro de data voy a retornar una objeto y ese objeto tiene una variable counter y un valor de 0
//Ese objeto defininido en las lineas 26-32 lo mando como Counter ahi abajo y quiero que me monte eso en una ETIQUETA que tiene el id contador
//lo que yo quiero es que el elemnteo enter lineas 26-32 controle el div que tiene el nombre contador en el documento html
//va a controlar todas las marcas que yo ponga ahi entre llaves 

//en el objeto de config que estoy colocando dentro de vue, esta reemplazando todo lo que esta en {{}} lo esta reemplanzando por los valores que estan en el data
//data devuelve un objeto que tiene los valores o los datos con los que yo voy a trabajar en el elemento

Vue.createApp(Counter).mount("#contador")


// Para el id evento. Tengo mi metodo data que devuelve un objeto, tengo un atributo metodos que tiene un objeto que tiene un objeto con los metodos
// metodos no es una funcion es una variable un atributo del objeto, y ese atributo tiene un objeto asociado, un objeto y ese objeto va a tener varias funciones: split, reverse and join
Vue.createApp({
    data(){
        return {
            message: "hello from Vue!"
        }
    },
    beforeCreate(){ 
        console.log(this.message)
    },
    methods: {
        reverseMessage(){
            this.message = this.message.split("").reverse().join("-");
        }
    }
}).mount("#evento");

Vue.createApp({
    data(){
        return{
            message: "HOLA ESTO ESTA PELUDO"
        }
    }
}).mount("#enlace");

Vue.createApp({
    data(){
        return{
            esVisible: false,
        }
    },
    methods:{
        cambio(){
            this.esVisible = !this.esVisible;
        }
    }
}).mount("#condicional");