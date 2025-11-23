function abrirModal() {
    document.getElementById("modalInscripcion").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalInscripcion").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalInscripcion");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
