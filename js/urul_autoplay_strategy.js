// Autoplay strategy that moves the tiles up, right, up, left and then repeats.
// No down movements which I've read are bad strategy in this game.

function UrulAutoplayStrategy(gameManager) {
  this.gameManager = gameManager;

  this.moves = [0, 1, 0, 3];  // 0: up, 1: right, 0: up, 3: left
  this.currentMove = 3; // index into moves array, start with 3 to make up first move.
}

UrulAutoplayStrategy.prototype.nextMove = function () {
   this.currentMove++;
   if(this.currentMove >= this.moves.length) {
      this.currentMove = 0;
   }

   return this.moves[this.currentMove];
};

UrulAutoplayStrategy.prototype.reset = function() {
   this.currentMove = 3;
}
