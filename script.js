document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Gracias por tu Mensaje 💄");
  });
});

const slider = document.getElementById('slider');
const despues = document.querySelector('.despues');

slider.addEventListener('input', (event) => {
    let value = event.target.value;
    despues.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
