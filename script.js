// 🚀 Manejo de botones
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.05)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    });
});

// 💬 Agregar comentarios y guardarlos en LocalStorage
function agregarComentario() {
    let comentario = document.getElementById("comentario").value.trim();
    if (comentario !== "") {
        let lista = document.getElementById("lista-comentarios");
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);

        // Guardar comentario en LocalStorage
        let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosGuardados.push(comentario);
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        // Limpiar campo
        document.getElementById("comentario").value = "";

        // Animación de entrada en nuevo comentario
        nuevoComentario.style.opacity = "0";
        nuevoComentario.style.transform = "translateY(10px)";
        setTimeout(() => {
            nuevoComentario.style.opacity = "1";
            nuevoComentario.style.transform = "translateY(0)";
        }, 200);
    }
}

// 🔄 Cargar comentarios al abrir la página
window.addEventListener("load", () => {
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    let lista = document.getElementById("lista-comentarios");
    comentariosGuardados.forEach(comentario => {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
    });
});

// 🔎 Buscador mejorado con filtrado en tiempo real
document.getElementById("busqueda").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".producto").forEach(producto => {
        let nombreProducto = producto.querySelector("p").textContent.toLowerCase();
        producto.style.display = nombreProducto.includes(query) ? "block" : "none";
    });
});

// 🚀 Botón "Comenzar" con efectos y ocultar portada
document.getElementById("botonAccion").addEventListener("click", function() {
    this.innerText = "¡Vamos!";
    this.style.backgroundColor = "#8f6b54";

    // Ocultar portada con animación suave
    let portada = document.getElementById("portada");
    portada.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    portada.style.opacity = "0";
    portada.style.transform = "scale(0.9)";
    setTimeout(() => portada.style.display = "none", 800);
});

