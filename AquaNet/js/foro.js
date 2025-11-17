function alternarFiltro(idFiltro) {
    const opcionesFiltro = document.getElementById(idFiltro);
    const botonFiltro = opcionesFiltro.previousElementSibling;
   
    opcionesFiltro.classList.toggle('activo');
    botonFiltro.classList.toggle('abierto');
}
 
document.addEventListener('DOMContentLoaded', function() {
    const campoBusqueda = document.querySelector('.campo-busqueda');
   
    if (campoBusqueda) {
        campoBusqueda.addEventListener('input', function(e) {
            const termino = e.target.value.toLowerCase();
            const publicaciones = document.querySelectorAll('.publicacion-foro');
           
            publicaciones.forEach(publi => {
                const titulo = publi.querySelector('.titulo-publicacion').textContent.toLowerCase();
                publi.style.display = titulo.includes(termino) ? 'grid' : 'none';
            });
        });
    }
 
    const casillasFiltro = document.querySelectorAll('.opcion-filtro input');
   
    casillasFiltro.forEach(casilla => {
        casilla.addEventListener('change', aplicarFiltros);
    });
});
 
function aplicarFiltros() {
    const zonasSeleccionadas = Array.from(document.querySelectorAll('.opcion-filtro input:checked'))
        .map(cb => cb.value);
   
    const publicaciones = document.querySelectorAll('.publicacion-foro');
   
    if (zonasSeleccionadas.length === 0) {
        publicaciones.forEach(publi => publi.style.display = 'grid');
        return;
    }
   
    publicaciones.forEach(publi => {
        const titulo = publi.querySelector('.titulo-publicacion').textContent.toLowerCase();
        const mostrar = zonasSeleccionadas.some(zona =>
            titulo.includes(zona.replace('-', ' '))
        );
       
        publi.style.display = mostrar ? 'grid' : 'none';
    });
}
 
document.addEventListener('DOMContentLoaded', function() {
    const botonPublicar = document.querySelector('.boton-publicar');
   
    if (botonPublicar) {
        botonPublicar.addEventListener('click', function() {
            alert('Funcionalidad de publicación: aquí se abriría un formulario o modal para crear una nueva publicación.');
        });
    }
});
 
document.addEventListener('DOMContentLoaded', function() {
    const botonesCompartir = document.querySelectorAll('.boton-compartir');
   
    botonesCompartir.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('Funcionalidad de compartir: aquí se copiaría el enlace de la publicación.');
        });
    });
});
