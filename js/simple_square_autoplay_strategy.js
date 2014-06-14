// Autoplay strategy that moves the tiles up, right, down, left and then repeats.

function SimpleSquareAutoplayStrategy(gameManager) {
  this.gameManager = gameManager;

  this.moves = [0, 1, 2, 3];  // 0: up, 1: right, 2: down, 3: left
  this.currentMove = 3; // index into moves array, start with 3 to make up first move.
}

SimpleSquareAutoplayStrategy.prototype.nextMove = function () {
   this.currentMove++;
   if(this.currentMove >= this.moves.length) {
      this.currentMove = 0;
   }

   return this.moves[this.currentMove];
};

SimpleSquareAutoplayStrategy.prototype.reset = function() {
   this.currentMove = 3;
}
