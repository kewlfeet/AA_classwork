# require_relative "board.rb"
 
class Piece
    attr_reader :color, :board
    attr_accessor :pos
    def initialize(color = :NP, board, start_pos)
        @color = color
        @board = board
        @pos = start_pos
    end

    def moves
        # king_pos = king
    end
end