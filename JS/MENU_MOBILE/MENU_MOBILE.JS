const boton = document.getElementById("boton_menu_mobile");
const boton_cerrar = document.getElementById("boton_cerra_menu_mobile");

//contenedores ventana modal
const div_body = document.getElementById("div_body");
const cont_ventana_modal_externo = document.getElementById("cont_ventana_modal_externo");

const abrirVenatanModal = () => {
    div_body.style.visibility = "visible"
    cont_ventana_modal_externo.style.transform = "translatex(-0%)"
}

const cerrarVentanaModal = () => {
    cont_ventana_modal_externo.style.transform = "translatex(-100%)";
    div_body.style.visibility = "hidden";
}


boton.addEventListener("click", abrirVenatanModal);
boton_cerrar.addEventListener("click", cerrarVentanaModal);