// Variables y respuestas correctas 
let puntaje = 0;
const respuestasCorrectas = {
    pregunta1: "A",
    pregunta2: "B",
    pregunta3: "C",
    pregunta4: "A",
    pregunta5: "A",
    pregunta6: "C",
    pregunta7: "A",
    pregunta8: "B",
    pregunta9: "A",
    pregunta10: "C",
};

let vRespuestas = document.querySelector('#verificarRespuestas');
let resulta = document.querySelector('#resultado');

// Verificar respuestas y mostrar puntaje
function verificarRespuestas() {
    puntaje = 0; // Reinicia el puntaje

    for (let i = 1; i <= 10; i++) {
        let respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`);
        if (respuesta && respuesta.value === respuestasCorrectas[`pregunta${i}`]) {
            puntaje++;
        }
    }

    alert(`Tu puntaje es: ${puntaje} / 10`);
    resulta.innerText = 'Respuestas correctas: ' + puntaje; 
    document.querySelector('#reiniciarJuego').style.display = 'block';
}

// Reiniciar juego recargando la página
document.querySelector('#reiniciarJuego').addEventListener('click', function() {
    location.reload();
});

// Configura el evento click 
vRespuestas.addEventListener('click', verificarRespuestas);








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

   

/*Pagina creadora interaccion */

// Selecciono los botones
const button1 = document.querySelector('#botoncards1');
const button2 = document.querySelector('#botoncards2');
const button3 = document.querySelector('#botoncards3');

// Selecciono los textos
const cardText1 = document.querySelector('#cardText1'); 
const cardText2 = document.querySelector('#cardText2'); 
const cardText3 = document.querySelector('#cardText3');

// Se muestra o no según si ya se tocó el botón o no 
function interaccioncardsboton(cardText) {
    if (cardText.style.display === 'none' || cardText.style.display === '') { 
        cardText.style.display = 'block';
    } else {
        cardText.style.display = 'none';
    }
}

// Asignar eventos a cada botón
button1.addEventListener('click', () => interaccioncardsboton(cardText1));
button2.addEventListener('click', () => interaccioncardsboton(cardText2));
button3.addEventListener('click', () => interaccioncardsboton(cardText3));
