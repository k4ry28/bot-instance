const chat = document.querySelector('.chat-box');
const chatForm = document.querySelector('#chat-form');
const text = document.querySelector('#input-text');

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    let mensaje = text.value;
    // Agrego mensaje al chat
    let input = document.createElement('div');
    input.className = 'chat-bubble client';
    input.innerHTML = mensaje;
    chat.append(input);
    chat.scrollTop = chat.scrollHeight;

    // Respuesta segun mensaje:
    let respuesta = document.createElement('div');
    respuesta.className = 'chat-bubble bot';

    if (/si/gi.test(mensaje)) {
        respuesta.innerHTML = 'Perfecto, si escribes tu numero de DNI podre buscarlo por ti';
        setTimeout(() => {
            chat.append(respuesta);
            chat.scrollTop = chat.scrollHeight;
        }, 700);
    }
    else if (/no/gi.test(mensaje)) {
        respuesta.innerHTML = 'Sera en otro momento, que tengas un lindo día!';
        setTimeout(() => {
            chat.append(respuesta);
            chat.scrollTop = chat.scrollHeight;
        }, 700);
    }
    else if (/[0-9]{7,8}/.test(mensaje)) {
        respuesta.innerHTML = 'Dame un momento...';
        setTimeout(() => {
            chat.append(respuesta);
            chat.scrollTop = chat.scrollHeight;
        }, 200);

        let dni = mensaje.match(/[0-9]{7,8}/);
        let respuesta2 = document.createElement('div');
        respuesta2.className = 'chat-bubble bot';
        let respuesta3 = document.createElement('div');
        respuesta3.className = 'chat-bubble bot';

        fetch(`/obtenerInfracciones/${dni[0]}`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                if (data.dni) {
                    respuesta2.innerHTML = `El usuario consultado <br> DNI: ${data.dni} <br> Nombre: ${data.nombre}`;
                    setTimeout(() => {
                        chat.append(respuesta2);
                        chat.scrollTop = chat.scrollHeight;
                    }, 800);

                    respuesta3.innerHTML = data.infracciones;
                    
                    setTimeout(() => {
                        chat.append(respuesta3);
                        chat.scrollTop = chat.scrollHeight;
                    }, 950);
                }
                else {
                    respuesta2.innerHTML = data;
                    setTimeout(() => {
                        chat.append(respuesta2);
                        chat.scrollTop = chat.scrollHeight;
                    }, 700);
                }

            });
    }

    else if (/info|como te llamas|quien sos/gi.test(mensaje)) {
        fetch(`/contextoInicial`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                respuesta.innerHTML = `Mi nombre es ${data.nombre} <br> Fui creada por ${data.creador}`;
                setTimeout(() => {
                    chat.append(respuesta);
                    chat.scrollTop = chat.scrollHeight;
                }, 800);
            });
    }

    else if (/gracias|adios|chau/gi.test(mensaje)) {
        respuesta.innerHTML = 'Un placer ayudarte. Que tengas un lindo día!';
        setTimeout(() => {
            chat.append(respuesta);
            chat.scrollTop = chat.scrollHeight;
        }, 700);
    }

    text.value = '';

})