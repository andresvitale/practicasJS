let contador = 0

const valor = document.getElementById('valor');
const decrementar = document.getElementById('decrementar');
const reset = document.getElementById('reset');
const incrementar = document.getElementById('incrementar');

decrementar.onclick = function() {
    contador--;
    valor.innerHTML = contador;
}

reset.onclick = function() {
    contador = 0;
    valor.innerHTML = contador;
}

incrementar.onclick = function() {
    contador++;
    valor.innerHTML = contador;
}