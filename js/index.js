//MENU RESPONSIVE
const menucelu = document.querySelector("#menucelu");
const menucompu = document.querySelector("#menucompu");

   iconomenu.addEventListener("click", () => {
       //Creamos la funcion para ocultar o mostrar segun como esta 
       if (menucelu.style.display === "block") {
           menucompu.style.display = "none"; // Oculta el menú compu
       } else {
           menucompu.style.display = "block"; // Muestra el menú compu
       }
   });

   //Galeria de fotos pagina principal
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


//Interacción sección juegos

function empezarjuego() {
    document.querySelector('#botonempezar').style.display = 'none';
    document.querySelector('#juego').style.display = 'block';
}


document.querySelector('#botonempezar').addEventListener('click', empezarjuego);
