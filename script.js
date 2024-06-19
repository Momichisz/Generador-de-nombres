// Listas de nombres
const nombres1 = ["Juan", "María", "Carlos", "Laura", "Pedro", "Ana", "Mauricio", "Kevin", "Rommel", "Luis", "Jesus", "Eduardo", "Yussif", "Josue"];
const nombres2 = ["García", "Martínez", "Rodríguez", "López", "Sánchez", "Fernández", "Ek", "Canepa", "Montero", "Ciau", "Paredes", "Flores"];

// Función para generar un nombre aleatorio
function generarNombre() {
    const nombre1 = nombres1[Math.floor(Math.random() * nombres1.length)];
    const nombre2 = nombres2[Math.floor(Math.random() * nombres2.length)];
    return `${nombre1} ${nombre2}`;
}

// Añadir evento al botón para generar nombre
document.querySelector('.btn-generate').addEventListener('click', (e) => {
    const nombre = generarNombre();
    document.getElementById('gen-name').textContent = nombre;
});
