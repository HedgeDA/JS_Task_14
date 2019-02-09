'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
ws.addEventListener('message', onMessage);

function onMessage(event) {
  for (let element of document.querySelector('.websocket').getElementsByTagName('div')) {
    if (event.data === element.textContent) {
      element.classList.add('flip-it');
    } else {
      element.classList.remove('flip-it');
    }
  }
}
