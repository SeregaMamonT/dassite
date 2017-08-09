export function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  return min + ":" + addZero(sec);
}

function addZero(sec) {
  return sec > 9 ? sec : '0' + sec;
}