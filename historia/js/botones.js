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