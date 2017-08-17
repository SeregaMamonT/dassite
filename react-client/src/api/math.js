export function fetchSquare(number) {
  return fetch(`rest/math/square/${number}`)
    .then(res => res.text());
}

export function fetchPower(base, exponent) {
  return fetch(`rest/math/power/${base}/${exponent}/`)
    .then(res => res.text());
}