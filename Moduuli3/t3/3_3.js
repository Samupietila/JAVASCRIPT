'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.getElementById('target');

for (let i = 0; i < 3; i++) {
  let element = '<li>' + names[i] + '</li>'
  ul.innerHTML += element;
}