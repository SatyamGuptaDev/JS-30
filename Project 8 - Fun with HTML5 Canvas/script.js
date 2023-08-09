const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let direction = true;
let hue = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){

    if(!isDrawing){
        lastX = e.offsetX;
        lastY = e.offsetY;
        return;
    } 

    console.log(e);


    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;


    ctx.moveTo(lastX,lastY);
    lastX = e.offsetX;
    lastY = e.offsetY;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();


    hue++;
    if(hue>=360){
        hue = 0;
    }

    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',()=> isDrawing = true);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);
