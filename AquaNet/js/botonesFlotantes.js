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