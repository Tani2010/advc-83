var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

      last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
       console.log("my_touchmove");
       curpos_x = e.touches[0].clientX - canvas.offsetLeft;
       curpos_y = e.touches[0].clientY - canvas.offsetTop;

       ctx.beginPath();
       ctx.strokestyle = color;
       ctx.lineWidth = width_of_line;
       ctx.moveTo(last_position_of_x, last_position_of_y);
       ctx.lineTo(curpos_x, curpos_y);
       ctx.stroke();
        
       last_position_of_x=curpos_x;
       last_position_of_y=curpos_y
    }

    