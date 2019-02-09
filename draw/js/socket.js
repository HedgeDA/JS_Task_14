'use strict';

const wsDraw = new WebSocket('wss://neto-api.herokuapp.com/draw');

function editorUpdate(event) {
  const image = event.canvas.getContext('2d').getImageData(0, 0, event.canvas.width, event.canvas.height);
  const binary = Uint8Array.from(image.data);
  wsDraw.send(binary.buffer);
}

function drawOpen(event) {
  console.log('open');
  console.log(event);
  console.log(event.data);
}

function drawMessage(event) {
  console.log('message');
  console.log(event);
  console.log(event.data);
}


function init() {
  wsDraw.addEventListener('open', drawOpen);
  wsDraw.addEventListener('message', drawMessage);
  window.editor.addEventListener('update', editorUpdate);
}

document.addEventListener('DOMContentLoaded', init);
