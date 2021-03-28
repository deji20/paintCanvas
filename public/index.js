let canvas;
let ctx;

let color = "black";
let mousePos = {x:0, y:0};
let down = false;

$(document).ready(() => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    console.log(canvas.width);
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    $("#colorPicker").on("change", (colorPicker)=>{
        color = $(colorPicker.target).val();
        $("#colorwheel").css("background-color", color)
    })
    $("#clearCanvas").on("click", clear);
    $("#colorwheel").css("background-color", color)
});

$(document).on("mousedown", (mouse) => {
    down = true;
    ctx.strokeStyle = color;
    ctx.beginPath();
    requestAnimationFrame(draw);
})
$(document).on("mousemove", (mouse) => {
    mousePos.x = mouse.clientX;
    mousePos.y = mouse.clientY
})
$(document).on("mouseup", (mouse) => {
    down = false;
})

function fill(){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function clear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    if(down){
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        requestAnimationFrame(draw);
    }
}
