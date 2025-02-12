document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('loginButton');
    const modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgb(0,0,0)';
    modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
    modal.style.paddingTop = '60px';

    modal.innerHTML = `
        <div style="background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 80%;">
            <h2>Iniciar Sesión</h2>
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password"><br><br>
            <button id="confirmLogin">Confirmar</button>
            <button id="closeModal">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);

    loginButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const confirmLoginButton = document.getElementById('confirmLogin');
    confirmLoginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'GUSTAVO' && password === 'LALO') {
            alert('Inicio Exitoso');
        } else {
            alert('Usuario/Contraseña incorrecta');
        }
        modal.style.display = 'none';
    });
});
