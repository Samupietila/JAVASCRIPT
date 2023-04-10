'use strict';

function x(name, url, medium) {
  const h2 = document.createElement('h2');
  const h2text = document.createTextNode(name);
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank'
  const atext = document.createTextNode('URL')
  const img = document.createElement('img');
  img.src = medium;
  img.alt = name;
  const article = document.createElement('article');
  article.classList.add('card');
  h2.appendChild(h2text);
  article.appendChild(h2)
  article.appendChild(a).appendChild(atext)
  article.appendChild(img);
  const summary = document.querySelector('#results');
  summary.appendChild(article);
  console.log(summary);
}
const Form = document.querySelector('form');
Form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const code = document.querySelector('input[name=q]').value;
  try {
  document.getElementById('results').innerHTML = '';
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${code}`);
    const jsonData = await response.json();
    for (let i = 0; i < jsonData.length; i++){
      x(jsonData[i].show.name, jsonData[i].show.url, jsonData[i].show.image?.medium ??  'https://via.placeholder.com/210x295?text=Not%20Found');
    }
  } catch (error) {
    console.log(error.message);

  }
});