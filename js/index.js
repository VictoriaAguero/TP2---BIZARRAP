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


//PÁGINA JUEGOS

// Una vez que toca el boton de iniciar juego se muestra la primera pregunta
function empezarjuego() {
    document.querySelector('#botonempezar').style.display = 'none';
    document.querySelector('#preguntasform').style.display = 'block'; // Cambiado de '#juego' a '#preguntasform'
}

document.querySelector('#botonempezar').addEventListener('click', empezarjuego);

// Iniciar variables
let puntaje = 0;
let respuestasCorrectas = {
    pregunta1: "A",
    pregunta2: "B",
    pregunta3: "C",
    pregunta4: "A",
    pregunta5: "A",
    pregunta6: "C",
};

function verificarRespuestas() {
    puntaje = 0; // Reinicia el puntaje

    for (let i = 1; i <= 6; i++) {
        let respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`);
        if (respuesta && respuesta.value === respuestasCorrectas[`pregunta${i}`]) {
            puntaje++;
        }
    }
    
    alert(`Tu puntaje es: ${puntaje}`);
}

// Añadir evento de verificación al botón de la última pregunta
document.querySelector('form').addEventListener('submit', verificarRespuestas);

// Botón de reinicio del juego
document.querySelector('#reiniciarJuego').addEventListener('click', function() {
    location.reload();
});

