class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.$el.append(this.setupBoard());
    this.bindEvents()
  }

  // bindEvents() {}

  // makeMove($square) {}

  // setupBoard() {}
}

View.prototype.setupBoard = function() {
  const $grid = $("<ul></ul>");
  let $cell = $("<li></li>").text(" - ");
  let $row = $("<ul></ul>");

  for (let j=0; j<3; j++) {
    $row = $("<ul></ul>");
    // $row.data("row_idx", j);
    for (let i=0; i<3; i++) {
      $cell = $("<li></li>").text(" - ");
      // $cell.data("col_idx", i)
      $cell.data("idx", [j, i])
      $row.append($cell)
    } 
    $grid.append($row)
  }
  return $grid;
}

View.prototype.bindEvents = function() {
  this.$el.on("click", "li", (e) => {
    const position = $(e.target).data("idx")
    this.makeMove(position)
  });
}

View.prototype.makeMove = function(square) {
  const x = " x "
  const o = " o "
}


module.exports = View;
