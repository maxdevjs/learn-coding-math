window.onload = function () {
  const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

  // context.fillRect(0, 0, width, height);
  let centerY = height * 0.5,
      centerX = width * 0.5,
      offset  = height * 0.4, // how far to move the object
      speed   = 0.1, // how fast move the object back and forth (how fast increment the angle so it moves from 0 to 2PI and beyond, starting with value of 0.1)
      angle   = 0;
 
    // draw an object at the position calculated from previous variables
    const render = () => {
      const y = centerY + Math.sin(angle) * offset,
            x = centerY + Math.cos(angle) * offset;

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(x, y, 50, 0, Math.PI * 2, false);
      context.fill();

      angle += speed;

      // call render over and over at a rate that synced with the screen refresh
      requestAnimationFrame(render); 
    };

    render ();

};
