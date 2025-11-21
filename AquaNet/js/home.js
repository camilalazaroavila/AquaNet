function initMap() {
      console.log("Maps API Loaded correctamente");
    }
    function moverCarrusel(direccion) {
    const slides = document.querySelectorAll(".slide");
    indice += direccion;
 
    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;
 
    document.querySelector(".carrusel").style.transform =
        "translateX(" + (-indice * 100) + "%)";
}
 
document.querySelector(".btn-reportar").addEventListener("click", () => {
    document.getElementById("modal-reporte").style.display = "flex";
});
 
document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modal-reporte").style.display = "none";
});
 
document.getElementById("modal-reporte").addEventListener("click", (e) => {
    if (e.target.id === "modal-reporte") {
        document.getElementById("modal-reporte").style.display = "none";
    }
});
 
let modalMap;
 
function initMap() {
    modalMap = new google.maps.Map(document.getElementById("modalMap"), {
        center: { lat: -32.889458, lng: -68.845839 },
        zoom: 12,
    });
}

document.querySelector(".btn-cortes").addEventListener("click", () => {
    document.getElementById("modal-cortes").style.display = "flex";
});

document.getElementById("cerrarModalCortes").addEventListener("click", () => {
    document.getElementById("modal-cortes").style.display = "none";
});
 
document.getElementById("modal-cortes").addEventListener("click", (e) => {
    if (e.target.id === "modal-cortes") {
        document.getElementById("modal-cortes").style.display = "none";
    }
});