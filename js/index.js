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

//Tomamos los id con el queryselecrtor
let vRespuestas = document.querySelector('#verificarRespuestas');
let resulta = document.querySelector('#resultado');

// Verificar respuestas y mostrar puntaje
function verificarRespuestas() {
    puntaje = 0; // Reinicia el puntaje

//Hacemos este for para que se ejecute 10 veces por las 10 preguntas
    for (let i = 1; i <= 10; i++) {
    //Acá se selecciona un input con el nombre pregunta y el número que da el for.
        let respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`); //Con el checked se compruba lo que selecciono el jugador
    //Acá se compruba si la respuesta es la declarada en la const variables correctas y si es asi se suma punto
        if (respuesta && respuesta.value === respuestasCorrectas[`pregunta${i}`]) {
            puntaje++;
        }
    }

//Alert para avisar al usuario 
    alert(`Tu puntaje es: ${puntaje} / 10`);
//En el div se muestra un p con sus respuestas 
    resulta.innerText = 'Respuestas correctas: ' + puntaje; 
    //Se vuelve a 0, se oculta las respuestas y se reincia el jeugo
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

   


