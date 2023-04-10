'use strict';
async function x() {
  let x = 123;
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonData = await response.json();
    console.log(jsonData.value);
  } catch (error) {
    console.log(error);
  }
}
x()