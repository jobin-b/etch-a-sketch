
const container = document.getElementById("container");
function removeGrid(){
  const divs = document.querySelectorAll(".grid-item");
  divs.forEach(el => {
    container.removeChild(el);
  });
}
function genGrid(rows, cols){
  removeGrid();
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for(let i = 0; i < (rows * cols); i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", function(e){
      div.style.backgroundColor = "grey";
    });
    container.appendChild(div).className = "grid-item";
  }
}
let r = 16, c = 16;
const button = document.getElementById("dimensions");
button.addEventListener("mousedown", function(e){
  r = prompt("Enter the number of rows (Limit: 100)");
  c = prompt("Enter the number of columns (Limit: 100)");
  if(r <= 100 && c <= 100) genGrid(r,c);
});

genGrid(r,c);


