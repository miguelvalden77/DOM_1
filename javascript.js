// filter y map
let personas = [
    {
        nombre: "Juanpe",
        edad: 19
    },
    {
        nombre: "Miguel",
        edad: 22
    },
    {
        nombre: "Pablo",
        edad: 9
    },
    {
        nombre: "Mª José",
        edad: 14
    },
    {
        nombre: "Luciita",
        edad: 18
    }
]

let arr_filter = personas.filter(persona => persona.edad >= 18)

let arr_map = personas.map(persona => persona.nombre)

console.log(arr_filter)
console.log(arr_map)
console.log(2 > 1 ? "Hola" : "Nada")


// DOM -> Selección de elementos en el DOM

    // getElementById()
    const titulo = document.getElementById("title")
    console.log(titulo.textContent)

    // getElementByTagName()
    const textos = document.getElementsByTagName("p")
    console.log(textos)

    //getElementByClassName()
    const titulo_2 = document.getElementsByClassName("titulo-secundario")
    console.log(titulo_2)

    const square = document.getElementById("cuadrado")
    const texto = document.getElementById("texto-xxx")
    const range = document.getElementById("range")


    // Eventos 
    // click, dblClick

    titulo.addEventListener("click", ()=>{
        
        console.log("click")
    })

    titulo.addEventListener("dblclick", ()=>{

        console.log("doble click")
    })

    square.addEventListener("mouseenter", ()=>{

        console.log("Estoy dentro")
    })

    square.addEventListener("mouseleave", ()=>{

        console.log("Estoy fuera")
    })

    square.addEventListener("mousemove", (evt)=>{

        // console.log("X", evt.clientX,"Y", evt.clientY)
    })

    square.addEventListener("mousedown", ()=>{

        console.log("apretando ratón")
    })

    square.addEventListener("mouseup", ()=>{

        console.log("soltando puntero")
    })


