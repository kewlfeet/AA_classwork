require_relative "pieces.rb"

class NullPiece < Piece
      def initialize(color, board, start_pos)
        super(color, board)
        @pos = nil
    end
end