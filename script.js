document.addEventListener('DOMContentLoaded', function() {
    const pagina2Button = document.getElementById('pagina2');
    const pagina3Button = document.getElementById('pagina3');
    const paginaPrincipalButton = document.getElementById('paginaPrincipal');
    const welcomeMessageDiv = document.getElementById('welcomeMessage');
    const ageMessageDiv = document.getElementById('ageMessage');

    // Navegación entre páginas
    if (pagina2Button) {
        pagina2Button.addEventListener('click', function() {
            window.location.href = 'pagina2.html';
        });
    }

    if (pagina3Button) {
        pagina3Button.addEventListener('click', function() {
            window.location.href = 'pagina3.html';
        });
    }

    if (paginaPrincipalButton) {
        paginaPrincipalButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Interacciones de bienvenida solo en la página principal
    if (welcomeMessageDiv) {
        alert("Bienvenido a la página principal");
        const userName = prompt("Por favor, ingresa tu nombre:");
        if (userName) {
            welcomeMessageDiv.innerHTML = `<h2>Bienvenido, ${userName}!</h2>`;
        } else {
            welcomeMessageDiv.innerHTML = `<h2>Bienvenido, visitante!</h2>`;
        }
    }

    // Interacciones de bienvenida y edad en la página de galería
    if (ageMessageDiv) {
        alert("Bienvenido a la galería");
        const userAge = prompt("Por favor, ingresa tu edad:");
        if (userAge) {
            if (parseInt(userAge) > 20) {
                ageMessageDiv.innerHTML = `<h2>Eres mayor de 20 años</h2>`;
            } else {
                ageMessageDiv.innerHTML = `<h2>No eres mayor de 20 años</h2>`;
            }
        }
    }

    // Funcionalidad de cálculo en la página de tabla de valores
    const calcularButtons = document.querySelectorAll('.calcular');
    calcularButtons.forEach(button => {
        button.addEventListener('click', function() {
            const operacion = button.getAttribute('data-operacion');
            let resultado;
            if (operacion === 'multiplicacion') {
                const num1 = parseFloat(prompt("Ingresa el primer número:"));
                const num2 = parseFloat(prompt("Ingresa el segundo número:"));
                resultado = num1 * num2;
                alert(`El resultado de la multiplicación es: ${resultado}`);
            } else if (operacion === 'exponente') {
                const num = parseFloat(prompt("Ingresa el número:"));
                resultado = num * num;
                alert(`El resultado de elevar al cuadrado es: ${resultado}`);
            } else if (operacion === 'resta') {
                const num1 = parseFloat(prompt("Ingresa el primer número:"));
                const num2 = parseFloat(prompt("Ingresa el segundo número:"));
                resultado = num1 - num2;
                alert(`El resultado de la resta es: ${resultado}`);
            }
        });
    });
});