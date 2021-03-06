// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var initialPosition = [63, 146, 229];
    var fastOrSlow = [256, 512];
    this.x = -100;
    this.y = initialPosition[Math.floor(Math.random() * initialPosition.length)];
    this.speed = fastOrSlow [Math.floor(Math.random() * fastOrSlow.length)];

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if  (this.x > 500)  {
      var initialPosition = [63, 146, 229];
      var fastOrSlow = [256, 512];
      this.x = -100;
      this.y = initialPosition[Math.floor(Math.random() * initialPosition.length)];
      this.speed = fastOrSlow[Math.floor(Math.random() * fastOrSlow.length)];
    }
    else  {
      this.x += this.speed * dt;
      //console.log(Math.floor(this.x));
    }
    //console.log(this.x);
    //this.y = this.speed * dt;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function()  {
  this.x = 202;
  this.y = 395;
  var sprites = ['images/char-boy.png', 'images/char-pink-girl.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-princess-girl.png'];
  this.sprite = sprites[Math.floor(Math.random() * sprites.length)];
}

var newX;
var newY;


Player.prototype.handleInput = function(event)  {
  if(event === 'left') {
    newX = this.x - 101;
  }
  else if(event === 'right') {
    newX = this.x + 101;
  }
  else if(event === 'up') {
    newY = this.y - 83;
  }
  else if(event === 'down') {
    newY = this.y + 83;
  }
  var move = document.createElement("audio");
  move.setAttribute('src', 'move.wav');
  move.play();
};


Player.prototype.update = function(dt) {
    if (newX >= 0 && newX <= 404)  {
      this.x = newX;
    }
    else  {
      this.x = this.x;
    }
    if (newY >= -20 && newY <= 415)  {
      this.y = newY;
    }
    else  {
      this.y = this.y;
    }
}

Player.prototype.render = function()  {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var enemy1 = new Enemy();
//var enemy2 = new Enemy();
//var enemy3 = new Enemy();
var allEnemies = [];

function initialise() {
  allEnemies = [];

  for(var i = 0; i < 3; i++)  {
    var enemy = new Enemy();
    allEnemies.push(enemy);
  }
}

initialise();




var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
