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

document.querySelectorAll(".estrella").forEach((estrella) => {
    estrella.addEventListener("click", function () {
        let valor = this.getAttribute("data-valor");
        document.querySelectorAll(".estrella").forEach(e => e.classList.remove("activa"));
        for (let i = 0; i < valor; i++) {
            document.querySelectorAll(".estrella")[i].classList.add("activa");
        }
    });
});

function guardarValoracion() {
    let comentario = document.getElementById("comentario").value;
    let estrellasSeleccionadas = document.querySelectorAll(".estrella.activa").length;
    if (estrellasSeleccionadas > 0 && comentario.trim() !== "") {
        alert(`Gracias por tu valoración de ${estrellasSeleccionadas} estrellas. Tu comentario: "${comentario}"`);
    } else {
        alert("Por favor, deja una valoración y un comentario antes de enviar.");
    }
}
