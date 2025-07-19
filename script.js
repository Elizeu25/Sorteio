const btn = document.querySelector('button');
const inputMin = document.querySelector('.input-min');
const inputMax = document.querySelector('.input-max');

btn.addEventListener('click', () => {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);

    // Verifica se os valores são válidos
    if (isNaN(min) || isNaN(max)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    if (min >= max) {
        alert('O valor mínimo deve ser menor que o valor máximo.');
        return;
    }

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(`Número sorteado: ${resultado}`);
});