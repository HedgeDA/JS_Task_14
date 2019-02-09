'use strict';

function send() {
  fetch('https://neto-api.herokuapp.com/comet/long-pooling', {
    method: 'GET',
  })
    .then((response) => {
      if (200 <= response.status && response.status < 300) {
        return response;
      }

      throw new Error(response.statusText);
    })
    .then((response) => response.json())
    .then((response) => {
      for (let element of document.querySelector('.long-pooling').getElementsByTagName('div')) {
        if (response.toString() === element.textContent) {
          element.classList.add('flip-it');
        } else {
          element.classList.remove('flip-it');
        }
      }
      send();
    })
    .catch((error) => console.log(`Ошибка выполнения запроса: ${error}`));}

function init() {
  send();
}

document.addEventListener('DOMContentLoaded', init);