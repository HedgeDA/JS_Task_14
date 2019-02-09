'use strict';

let xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
setInterval(send, 1000);

function send() {
  xhr.open("GET", 'https://neto-api.herokuapp.com/comet/pooling/', true);
  xhr.send()
}

function onLoad() {
  if (xhr.status < 200 || xhr.status >= 300) {
    return;
  }

  for (let element of document.querySelector('.pooling').getElementsByTagName('div')) {
    if (xhr.responseText === element.textContent) {
      element.classList.add('flip-it');
    } else {
      element.classList.remove('flip-it');
    }
  }
}
