// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  if (min < 0) {
		console.log ('Минимум меньше допустимого значения');
		return;
	}
  if (min === 0) {
		console.log ('Минимальное значение равно нулю');
	}
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
