export function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  return min + ":" + addZero(sec);
}

function addZero(number) {
  return number > 9 ? number : '0' + number;
}