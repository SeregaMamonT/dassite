var fetch = require('fetch-everywhere');

getData('rest/tracks/all', (tracks) => {
  var ul = document.createElement('ul');
  tracks.forEach(track => {
    var li = document.createElement('li');
    li.innerHTML = JSON.stringify(track);
    ul.appendChild(li);
  });
  document.getElementById('trackList').appendChild(ul);
});


function getData(url, callback) {
  fetch(url)
  .then(resp => resp.json())
  .then(json => callback(json))
  .catch((e) => console.log(e));
}