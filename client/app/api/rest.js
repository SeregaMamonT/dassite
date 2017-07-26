import fetch from 'fetch-everywhere';

export function rest(url, callback) {
  fetch(restUrl(url))
      .then(resp => resp.json())
      .then(json => callback(json))
      .catch((e) => console.log(e));
}


export function restPlain(url, callback) {
  fetch(restUrl(url))
      .then(resp => resp.text())
      .then(json => callback(json))
      .catch((e) => console.log(e));
}


function restUrl(url) {
  return 'rest/' + url;
}
