const INICIO = document.getElementById("inicio")
const PRODUCTOS = document.getElementById("producto")
const NOSOTROS = document.getElementById("nosotros")
const CONTACTO = document.getElementById("contacto")

// elementos mobile
const INICIO_MOBILE = document.querySelector(".inicio_mobile")
const PRODUCTOS_MOBILE = document.querySelector(".producto_mobile")
const NOSOTROS_MOBILE = document.querySelector(".nosotros_mobile")
const CONTACTO_MOBILE = document.querySelector(".contacto_mobile")

const VENTANA_INICIO = document.getElementById("ventanas");


const ocultar_ventana_fuera_de_pantalla = () => {
    let lista = VENTANA_INICIO.children;

    for (let i of lista) {
        i.classList.add("li_ocultado");
    }
}



const navegacion = (boton, ventana) => {
    let valorObtenido = boton.getAttribute('data-value');
    let lista = VENTANA_INICIO.children;

    ocultar_ventana_fuera_de_pantalla();
    VENTANA_INICIO.style.transform = `translate(${valorObtenido}vw)`; 
    lista[ventana].classList.remove("li_ocultado");
    
}

INICIO.addEventListener("click", () => navegacion(INICIO, 0));
PRODUCTOS.addEventListener("click", () => navegacion(PRODUCTOS, 1));
NOSOTROS.addEventListener("click", () => navegacion(NOSOTROS, 2));
CONTACTO.addEventListener("click", () => navegacion(CONTACTO, 3));

// MOBILE
INICIO_MOBILE.addEventListener("click", () => {cerrarVentanaModal(), navegacion(INICIO, 0)})
PRODUCTOS_MOBILE.addEventListener("click", () => {cerrarVentanaModal(), navegacion(PRODUCTOS, 1)})
NOSOTROS_MOBILE.addEventListener("click", () => {cerrarVentanaModal(), navegacion(NOSOTROS, 2)})
CONTACTO_MOBILE.addEventListener("click", () => {cerrarVentanaModal(), navegacion(CONTACTO, 3)})