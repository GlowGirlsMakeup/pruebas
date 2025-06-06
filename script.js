document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
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

document.getElementById("busqueda").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".producto").forEach(producto => {
        producto.style.display = producto.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
});

document.getElementById("botonAccion").addEventListener("click", function() {
    this.innerText = "¡Vamos!";
    this.style.backgroundColor = "#8f6b54";
});

document.getElementById("botonAccion").addEventListener("click", function() {
    document.getElementById("portada").style.display = "none"; 
});

document.getElementById("explorar").addEventListener("click", function() {
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

let productos = document.querySelectorAll(".producto");
window.addEventListener("scroll", function() {
    productos.forEach(producto => {
        let posicion = producto.getBoundingClientRect().top;
        if (posicion < window.innerHeight - 50) {
            producto.classList.add("visible");
        }
    });
});
