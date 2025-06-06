document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Gracias por tu Mensaje 💄");
  });
});

function agregarComentario() {
    let comentario = document.getElementById("comentario").value;
    if (comentario.trim() !== "") {
        let lista = document.getElementById("lista-comentarios");
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
        document.getElementById("comentario").value = ""; // Limpiar campo
    }
}

function agregarComentario() {
    let comentario = document.getElementById("comentario").value;
    if (comentario.trim() !== "") {
        let lista = document.getElementById("lista-comentarios");
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);

        // Guardar en LocalStorage
        let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosGuardados.push(comentario);
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        document.getElementById("comentario").value = ""; // Limpiar campo
    }
}

// Cargar comentarios al abrir la página
window.onload = function() {
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    let lista = document.getElementById("lista-comentarios");
    comentariosGuardados.forEach(comentario => {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
    });
};

console.log("Estado de LocalStorage:", localStorage.getItem("mostrarModal"));

let enlacesWhatsApp = document.querySelectorAll("a[href*='wa.me'], a[href*='whatsapp']");
enlacesWhatsApp.forEach(enlace => {
    enlace.addEventListener("click", function() {
        localStorage.setItem("mostrarModal", "true");
    });
});
