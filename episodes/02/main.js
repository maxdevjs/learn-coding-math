window.onload = function () {
  const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

  // context.fillRect(0, 0, width, height);
  
  context.font = "20px Arial";
  
  context.beginPath();       // Start a new path
  context.moveTo(0, height / 2);    // Move the pen to (0, height / 2)
  context.lineTo(width, height / 2);  // Draw a line to (width, height / 2)
  context.stroke();          // Render the path

  // CanvasRenderingContext2D.translate
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
  context.translate(50, height / 2);
  // context.scale(1, -1);
  context.fillStyle = "red";

  for (let angle = 0; angle < Math.PI * 2; angle += .02) {
    let x = angle * 200,
        y = Math.sin(angle) * 200;

    const degree = Math.ceil((angle * 180) / Math.PI);
    // console.log(`${degree} - ${angle}`);
    
    if (degree === 0 || degree === 90 || degree === 180 || degree === 270 || degree === 360) {
      context.fillText(degree + "°" + " (" + angle + " rad)", x, -(height / 3));
      // context.fillText(angle + " rad", x, -(height / 3.5));

      context.beginPath();
      context.moveTo(x, height / 3); // top
      context.lineTo(x, -height / 3); // bottom
      context.stroke(); 
    }
    
    context.fillStyle = "black";
    context.fillRect(x, y, 5, 5)
    
    y = Math.cos(angle) * 200;
		context.fillStyle = "red";
		context.fillRect(x, y, 5, 5);
    
    // console.log(Math.sin(angle));
  }
  
};
