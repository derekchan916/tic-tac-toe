(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.$el = $el;
    this.bindEvents();
    this.game = game;
  };

  View.prototype.bindEvents = function() {

    // var makeMove = function(e){
    //   this.makeMove($(e.currentTarget));
    // };

    this.$el.on("click", "li", function(e){
      this.makeMove($(e.currentTarget));
    }.bind(this));
    // this.$el.on("click", "li", this.makeMove.bind(this));
  };

  View.prototype.makeMove = function ($square) {
    var index = $("li").index($square);
    var row = Math.floor(index / 3);
    var col = index % 3;

    if (this.game.board.grid[row][col]){
      alert('move error');
    } else {
      this.game.playMove([row, col])
      var mark = this.game.board.grid[row][col];
      $square.removeClass('empty');
      $square.append(mark);
    }

    if (this.game.isOver()) {
      if (this.game.board.winner()) {
        alert('The winner is '+ this.game.board.winner());
      } else {
        alert("Tie game");
      }
    }
  };

  View.prototype.setupBoard = function () {
    var grid = ("<ul class='TTT-grid group'></ul>");
    var cell = ("<li class='empty'></li>");

    this.$el.append(grid);

    for (var i = 0; i < 9; i++) {
      this.$el.find(".TTT-grid").append(cell);
    };
  };
})();
