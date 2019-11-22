require_relative "../piece.rb"
require "singleton"

# no args
# able to read color and symbol

class NullPiece < Piece
    include Singleton
    
    def initialize
        @symbol = " "
        @color = :np
    end
end