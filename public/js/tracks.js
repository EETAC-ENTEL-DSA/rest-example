const API_URL = "http://localhost:8080/dsaTracks/tracks";

async function loadTracks() {
    const container = document.getElementById('tracks');

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const tracks = await response.json();

        container.innerHTML = '';

        tracks.forEach(track => {
            const card = createTrackCard(track);
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error al obtener los tracks:", error);
        container.innerHTML = `<p style="color: red;">Error al cargar los tracks. Asegúrate de que el servidor en ${API_URL} esté activo.</p>`;
    }
}

function createTrackCard(track) {
    const div = document.createElement('div');
    div.classList.add('track-card');  

    div.innerHTML = `
        <h3>${track.title || 'Sin título'}</h3>
        <p><strong>Artista:</strong> ${track.singer || 'Desconocido'}</p>
        <small>ID: ${track.id}</small>
    `;

    return div;
}

document.addEventListener('DOMContentLoaded', loadTracks);