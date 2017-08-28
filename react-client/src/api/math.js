export function fetchSquare(number) {
  return fetch(`rest/math/square/${number}`)
    .then(res => res.text());
}

export function fetchPower(base, exponent) {
  return fetch(`rest/math/power/${base}/${exponent}/`)
    .then(res => res.text());
}

function stringifyForm(form) {
  return Object.keys(form).map(key => `${key}=${form[key]}`).join('&');
}

export function post(formValues) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  let body = stringifyForm(formValues);

  return fetch('rest/math/postAction', {
    method: 'POST',
    headers,
    body
  })
  .then(res => res.json());
}