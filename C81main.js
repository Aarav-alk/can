canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
 mouse_X=e.clientX-canvas.offsetLeft;
 mouse_y=e.clientY-canvas.offsetTop; 
 console.log("X=" + mouse_X + "Y=" + mouse_y);
 circle(mouse_X,mouse_y);
}
function circle(mouse_X,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_X,mouse_y,40,2,2*Math.PI);
    ctx.stroke();    
}