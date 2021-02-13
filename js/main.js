// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  if ((min < 0)||(min > max)||(min === max)) {
      console.log ('Указан некорректный диапазон!');
      return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getRandomFraction(min, max, numberCharacters) {
  if ((min < 0)||(min > max)||(min === max)||(numberCharacters < 0)) {
      console.log ('Указан некорректный диапазон!');
      return;
  }
  let number = Math.random() * (max - min) + min; //Максимум не включается, минимум включается, без округления
  return number.toFixed(numberCharacters); //Округление с плавающей точкой
}
