# require_relative "board.rb"

class Piece
    def initialize(color, board, start_pos)
        @color = color
        @board = board
        @pos = start_pos
    end
end