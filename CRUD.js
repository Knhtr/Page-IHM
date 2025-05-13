let juegos = JSON.parse(localStorage.getItem('juegos')) || [];
function guardarJuegos() {
    localStorage.setItem('juegos', JSON.stringify(juegos));
}

function mostrarJuegos() {
    const lista = document.getElementById('listaJuegos');
    lista.innerHTML = '';
    juegos.forEach((juego, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <span>${juego.nombre} - ${juego.categoria} - Estado: ${juego.estado}</span>
            <div class="actions">
                <button onclick="editarJuegos(${index})">✏️</button>
                <button onclick="eliminarJuegos(${index})">🗑️</button>
                <button onclick="cambiarEstado(${index})">🔄</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function agregarJuego() {
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    if(nombre && categoria) {
        juegos.push({ nombre, categoria, estado: 'Jugando' });
        guardarJuegos();
        mostrarJuegos();
        document.getElementById('nombre').value = '';
        document.getElementById('categoria').value = '';
    }
}

function editarJuegos(index) {
    const juego = juegos[index];
    const nuevoNombre = prompt('Ingrese el nuevo nombre:', juego.nombre);
    const nuevaCategoria = prompt('Ingrese la nueva categoria', juego.categoria);
    if (nuevoNombre && nuevaCategoria) {
        juegos[index].nombre = nuevoNombre;
        juegos[index].categoria = nuevaCategoria;
        guardarJuegos();
        mostrarJuegos();
    }
}

function eliminarJuegos(index) {
    if (confirm("¿Desea eliminar el juego?")){
        juegos.splice(index, 1);
        guardarJuegos();
        mostrarJuegos();
    }
}

function cambiarEstado(index) {
    const estados = ['Jugando', 'Terminado'];
    let estadoActual = juegos[index].estado;
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    juegos[index].estado = nuevoEstado;
    guardarJuegos();
    mostrarJuegos();
}

// AMIGOS
let amigos = JSON.parse(localStorage.getItem('amigos')) || [];
function guardarAmigos() {
    localStorage.setItem('amigos', JSON.stringify(amigos));
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
    const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <span>${amigo.amigo} - ${amigo.videogame} - Estado: ${amigo.estado}</span>
            <div class="actions">
                <button onclick="editarAmigo(${index})">✏️</button>
                <button onclick="eliminarAmigo(${index})">🗑️</button>
                <button onclick="cambiarEstado1(${index})">🔄</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function agregarAmigo() {
    const amigo = document.getElementById('amigo').value;
    const videogame = document.getElementById('videogame').value;
    if (amigo && videogame) {
        amigos.push({ amigo, videogame, estado: 'En línea' });
        guardarAmigos();
        mostrarAmigos();
        document.getElementById('amigo').value = '';
        document.getElementById('videogame').value = '';
    }
}

function editarAmigo(index) {
    const amigo = amigos[index];
    const nuevoAmigo = prompt('Ingrese el nombre del jugador:', amigo.amigo);
    const nuevoVideogame = prompt('Ingrese el juego en común:', amigo.amigo);
    if (nuevoAmigo && nuevoVideogame) {
        amigos[index].amigo = nuevoAmigo;
        amigos[index].videogame = nuevoVideogame;
        guardarAmigos();
        mostrarAmigos();
    }
}

function eliminarAmigo(index) {
    if (confirm("¿Deseas eliminar al Jugador?")) {
        amigos.splice(index, 1);
        guardarAmigos();
        mostrarAmigos();
    }
}

function cambiarEstado1(index) {
    const estados = ['En línea', 'Fuera de línea'];
    let estadoActual = amigos[index].estado;
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    amigos[index].estado = nuevoEstado;
    guardarAmigos();
    mostrarAmigos();
}