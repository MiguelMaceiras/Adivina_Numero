let numeroAleatorio = 0;

let intentos = 0;

const mensaje = document.getElementById('mensaxe');
const intentosDisplay = document.getElementById('intentos');
const inputJugada = document.getElementById('xogada');

function iniciarXogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    intentos = 0;

    mensaje.textContent = '';
    intentosDisplay.textContent = `Intentos: 0`;
    inputJugada.value = '';
    inputJugada.disabled = false;
}

function comprobarSuposicion() {
    const suposicion = Number(inputJugada.value);

    if (isNaN(suposicion) || suposicion < 1 || suposicion > 100) {
        mensaje.textContent = 'Por favor, insere un número válido entre 1 e 100.';
        return;
    }

    intentos++;
    intentosDisplay.textContent = `Intentos: ${intentos}`;

    if (suposicion === numeroAleatorio) {
        mensaje.textContent = `Parabéns! Adiviñaches o número ${numeroAleatorio} en ${intentos} intentos!`;
        mensaje.style.color = '#28a745';
        inputJugada.disabled = true;
        document.getElementById('boton-entrada').style.display = "none";
    } else if (suposicion < numeroAleatorio) {
        mensaje.textContent = 'Moi baixo! Tenta cun número maior.';
    } else {
        mensaje.textContent = 'Moi alto! Tenta cun número menor.';
    }

    inputJugada.value = '';
    inputJugada.focus();
}

window.onload = iniciarXogo;