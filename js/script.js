function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  const result = document.getElementById('range-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  let range = '';

  if (imc < 16.9) {
    range = 'Muito abaixo do peso';
  } else if (imc < 18.4) {
    range = 'Abaixo do peso';
  } else if (imc < 24.9) {
    range = 'Peso normal';
  } else if (imc < 29.9) {
    range = 'Acima do peso';
  } else if (imc < 34.9) {
    range = 'Obesidade grau I';
  } else if (imc < 40) {
    range = 'Obesidade grau II';
  } else if (imc > 40) {
    range = 'Obesidade grau III';
  }

  result.textContent = range;
}
start();
