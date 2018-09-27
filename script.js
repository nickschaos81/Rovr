$(function () {
  var socket = io.connect(),
    ui = {
      up: $('.btn-up'),
      left: $('.btn-left'),
      down: $('.btn-down'),
      right: $('.btn-right'),
      all: $('.btn')
    },
    activeClass = 'is-active',
    isPressed = false;

  //listen for key presses
  $(document).keydown(function(e){
    //don't do anything if there's already a key pressed
    if(isPressed) return;

    isPressed = true;
    switch(e.which){
      case 87:
        socket.emit('move', 'up');
        ui.up.addClass(activeClass);
        break;
      case 65:
        socket.emit('move', 'left');
        ui.left.addClass(activeClass);
        break;
      case 83:
        socket.emit('move', 'down');
        ui.down.addClass(activeClass);
        break;
      case 68:
        socket.emit('move', 'right');
        ui.right.addClass(activeClass);
        break;
      case 45: //poweron
	socket.emit('power','powerOn');
	break;
      case 46: //poweroff
	socket.emit('power','powerOff');
	break;
      case 33: //NightVision on 
	socket.emit('power','nvOn');
	break;
      case 34: //NightVision off
	socket.emit('power','nvOff');
    }
  });
  
  //stop all motors when any key is released
  $(document).keyup(function(e){
    ui.all.removeClass(activeClass);
    socket.emit('stop');
    isPressed = false;
  });
});

