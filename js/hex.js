/*const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0;i < 6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}*/

const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"
  ];
  
  function buscarColor() {
      const searchInput = document.getElementById("searchInput").value;
      const colorElement = document.querySelector(".color");
      const resultadosDiv = document.getElementById("resultadosBusqueda");
  
      const isValidHex = /^#[0-9A-F]{6}$/i.test(searchInput);
  
      if (isValidHex) {
          colorElement.textContent = searchInput;
          document.body.style.backgroundColor = searchInput;
          resultadosDiv.innerHTML = `<p>Color code: ${searchInput}</p>`;
      } else {
          alert("Please enter a valid hexadecimal color code (Example, #00FF00).");
      }
  }
  
  const btn = document.getElementById("btn");
  btn.addEventListener('click', function() {
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
          hexColor += hex[getRandomNumber()];
      }
      document.querySelector(".color").textContent = hexColor;
      document.body.style.backgroundColor = hexColor;
      document.getElementById("resultadosBusqueda").innerHTML = `<p>Color code: ${hexColor}</p>`;
  });
  
  function getRandomNumber() {
      return Math.floor(Math.random() * hex.length);
  }
  
