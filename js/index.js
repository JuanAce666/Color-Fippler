/*const colors = ["green","red","rgba(133,122,200)",
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function () {
    //get random number between 0 - 3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor (Math.random() * colors.length);
}*/

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function buscarColor() {
    const searchInput = document.getElementById("searchInput").value;
    const colorElement = document.querySelector(".color");
    const resultadosDiv = document.getElementById("resultadosBusqueda");
  
    if (colors.includes(searchInput)) {
        document.body.style.backgroundColor = searchInput;
        colorElement.textContent = searchInput;
        resultadosDiv.innerHTML = `<p>Color code: ${searchInput}</p>`;
    } else {
        alert("Color not found in the list!");
    }
}

const btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector(".color").textContent = colors[randomNumber];
    document.getElementById("resultadosBusqueda").innerHTML = `<p>Color code: ${colors[randomNumber]}</p>`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

