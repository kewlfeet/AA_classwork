require_relative "../piece.rb"
require_relative "slideable.rb"

class Queen < Piece
    include Slideable

    def initialize(color, board, start_pos)
        super(color, board, start_pos)
    end
end