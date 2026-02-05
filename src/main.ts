// Hello World を表示
const heading = document.createElement("h1");
heading.textContent = "Hello World";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
heading.style.fontFamily = "Arial, sans-serif";

document.body.style.margin = "0";
document.body.appendChild(heading);

// canvas 作成
const canvas = document.createElement("canvas");
canvas.style.display = "block";
canvas.style.margin = "20px auto";
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);



