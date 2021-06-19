/* Sintáxis del lenguaje| variables y tipos de datos*/
console.log("Funcionando correctamente ")
let n1; //undefined
let n2 = null
let n3 = 9
let decimal = 1.3
let booleano = true
let date = new Date()
let dia = date.getDate(),
    mes = date.getMonth(),
    año = date.getFullYear(),
    hoy = `$ { dia } - $ { mes } - $ { año }`
const pi = 3.1416
console.log("Número 1: ", n1)
console.log("Número 2: ", n2)
console.log("Número 3: ", n3)
console.log("Número decimal: ", decimal)
console.log("Booleano: ", booleano)
console.log("Fecha: ", hoy)
console.log("Pi: ", pi)

// Arreglos, json y objetos
let numero = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];

const json = {
    "nombres": ["Verónica", "Estefanía"],
    "género": "Femenino"
};

const teacher = {
    name: 'Teresita',
    genero: 'Femenino',
    juegos: ['Futbol', 'Basquet'],
    conocimientos: {
        lenguajes: ['Python', 'Js', ],
        materias: {
            Nivel1: 'Logica',
            Nivel2: 'POO',
            Nivel3: 'POOI'
        }
    }
};
//json.género = "F"
teacher.name = "Verónica"
teacher.edad = 21
console.log('Json', json, json.genero);
console.log('Objeto: ', 'Lenguaje:', teacher.conocimientos.lenguajes[0],
    teacher.conocimientos.materias.Nivel1);

//Estructuras de control
// + - * / %
// < == === <= > >= !=
// && || !
let num1 = 9
let num2 = 3
if (n1 === undefined)
    console.log(`${num1}=undefined`);
if (n2 === null)
    console.log(`${n2}=null`);
if (num1 == 1) {
    console.log(num1);
} else if (num1 == num2) {
    console.log(`${num1}=${num2}`);
} else {
    console.log(`${num1}!=${num2}`)
}
//Switch
let num = 12
rec = num % 4
switch (rec) {
    case 0:
        console.log(`El residuo ${rec} de ${num} es Par`);
        break;
    case 1:
        console.log(`El residuo ${rec} de ${num} es Impar`);
        break;
    default:
        if (isNaN(rec))
            console.log(`${rec}=Error`);
        break;
}
console.log("Salí del Switch")

//Bucles incremento ++
//Wile
let i = 0
console.log("Bucle while", colors)
while (i < colors.length && colors[i] != "blue") {
    console.log(i, colors[i])
    i = i + 1
}

//Bucle For
console.log("Bucle for", colors);
for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

//in
console.log("Recorrido for in", colors)
for (let j in colors) {
    console.log(j, colors[j])
}
//of // no muestra la posisicón
console.log("Recorrido on", colors)
for (let color of colors) {
    console.log(color)
}
let nombre = "Veronica"
for (let name of nombre) {
    console.log(name)
}
// arreglo
const Persons = [
    { "nombre": "Freddy", "apellido": "Masa" },
    { "nombre": "Hernan", "apellido": "Chuquimarca" },
    { "nombre": "Teresita", "apellido": "Martín" }

]
console.log("of");
for (let personas of Persons) {
    console.log(personas.nombre, personas.apellido)
}
//Recorridos de objetos iterables
console.log("Recorrido Foreach");
Persons.forEach(personas => {
        if (personas.nombre != "Freddy" && personas.apellido != "Masa")
            console.log(personas.nombre, personas.apellido)
    })
    // map
const persona = Persons.map(persona => persona.nombre)
console.log("Map", persona)
    // Filter
const person = Persons.filter(person => person.nombre != "Hernan" &&
    person.apellido != "Chuquimarca")
console.log("Filter", person);
//Find
const perso = Persons.find(perso => perso.nombre === "Teresita")
console.log("Find", perso)
    //Manejo de Funciones
    //Funciones Básicas
    //Función SUMAR
function Sumar() {
    console.log("La suma es:", 3 + 9);
}
Sumar()
let suma = () => {
    console.log("Suma con arrow función", 3 + 7);
}
let sume = () => console.log(5 + 8);
suma()
sume()
    //Función MULTIPLICAR
function Multiplicar(n1, n2) {
    return n1 * n2
}
let resp = Multiplicar(4, 9)
console.log("Sin arrow", resp);
const multi = (n1, n2) => n1 * n2
console.log("Con Arrow", multi(4, 9));
//Función DIVIDIR
//Sin arrow
function Dividir(n1, n2 = 2) {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message);
    }
    return resp
}
resp = Dividir(8, 4)
console.log("Sin arrow", resp);
resp = Dividir(8, 0)
console.log(resp);
//Con arrow
const divi = (n1, n2 = 2) => {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message);
    }
    return resp
}
console.log("Con arrow", divi(8, 4));
//Api fetch
// fetch: Sirve para sumir api --> Respuesta del servidor que entrega auna respuesta con datos para ser consumidos
fetch('https://pokeapi.co/api/v2/generation/')
    .then(res => res.json())
    .then(datos => {
        console.log(datos.results)
        datos.results.forEach(nomb => console.log(nomb.name, nomb.url))
    })
    .catch(error => console.log("Error del Api: ", error))

//Async Wait: Devuelve un objeto asincronico.No se va a ejecutar mientras no temrina el primero d ejecutarse
const obtenerDatos = async() => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/generation/')
        const datos = await resp.json()
            //console.log("---------Async Await----------");
        datos.results.forEach(nomb => console.log(nomb.name))
    } catch (error) {
        console.log("Error Api con ASync: ", error)
    }
}
obtenerDatos()

//DOM .- estructura de arbol de cualquier HTML 
let contenido = document.getElementById('contenedor')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Boleanas, Fechas';
variable.style.color = "pink"
variable.style.background = "#02266993"
console.log(variable)
let concepto = document.querySelector('.concepto')
console.log(concepto);
concepto.innerHTML = "Area de memoria"
let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo => {
    parrafo.innerHTML = `Area de memoria# ${cont}`
    console.log(parrafo);
    cont = cont + 1
})
console.log(conceptos);
//Eventos en Js
//Eventos
let boton = document.getElementById('boton2')
let valor = document.getElementById('valor')
boton.addEventListener('mouseover', () => {
    console.log("Pasaste el mouse :)");
})
boton.addEventListener('click', () => {
    let nodo = document.createElement("p") //Voy a crear otro elemento p
    nodo.innerHTML = "Nuevo Elemento"
    nodo.style.color = "orange"
    nodo.style.background = "#CCFFAA"
    contenido.appendChild(nodo)
})
valor.addEventListener('keypress', (e) => {
    console.log(e.target.value)
})