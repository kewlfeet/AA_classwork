require_relative "Pieces/knight.rb"
require_relative "Pieces/king.rb"
require_relative "Pieces/bishop.rb"
require_relative "Pieces/queen.rb"
require_relative "Pieces/rook.rb"
require_relative "Pieces/pawn.rb"
require_relative "Pieces/nullpiece.rb"

# require_relative "piece"

class Board
    attr_reader :val
    attr_accessor :board
    def initialize
        @board = Array.new(8) { Array.new(8) }
        self.place_pieces
    end

    def place_pieces
        # @board = Array.new(8) { Array.new(8) }
        nullp = NullPiece.instance
        @board.each.with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                row_idx == 0 || row_idx == 1 ? color= :B : color= :W
                start = [row_idx, col_idx]

                if row_idx.to_s.match?(/[1, 6]/)
                    @board[row_idx][col_idx] = Pawn.new(color, @board, start)

                elsif row_idx.to_s.match?(/[0,7]/)
                    case col_idx
                    when 0, 7
                        @board[row_idx][col_idx] = Rook.new(color, @board, start)
                    when 1,6
                        @board[row_idx][col_idx] = Knight.new(color, @board, start)
                    when 2,5
                        @board[row_idx][col_idx] = Bishop.new(color, @board, start)
                    when 3
                        @board[row_idx][col_idx] = Queen.new(color, @board, start)
                    when 4
                        @board[row_idx][col_idx] = King.new(color, @board, start)                        
                    end

                else
                    @board[row_idx][col_idx] = nullp
                end
            end
        end
    end

    def [](pos)
        x, y = pos
        self.board[x][y]
    end
    
    def []=(pos,val)
        x,y = pos
        self.board[x][y] = val
    end

    def move_piece(start_pos, end_pos)
        start_color = self[start_pos].color
        # a,b = start_pos
        # x,y = end_pos
        raise "#{start_color} piece already exists at #{end_pos}" if self[end_pos].color == start_color
        raise "Position out of bounds" unless self.is_in_bounds?(start_pos) && self.is_in_bounds?(end_pos)
        raise "No piece at position" if self[start_pos].instance_of? NullPiece
        self[end_pos] = self[start_pos]
        self[end_pos].pos = end_pos
        self[start_pos] = NullPiece.instance
        
    end

    def is_in_bounds?(pos)
        x, y = pos
        (x <= 7 && x >= 0) && (y <= 7 && y >= 0)
    end


end

# king - [0, 4], [7, 4]
# queen [0, 3], [7,3]
# bishop [0,2], [0,5], [7,2], [7,5], 
# knight [0,1], [0,6], [7,1], [7,6], 
# rook [0,0], [0,7], [7,0], [7,7], 
# # pawn [2].all, [6].all

#     #0   1  2   3   4   5   6   7 
# [[ :R , :K , :B , :Q , :K , :B , :K , :R ],
#  [ :P , :P , :P , :P , :P , :P , :P , :P ],
#  [nil,nil,nil,nil,nil,nil,nil,nil],
#  [nil,nil,nil,nil,nil,nil,nil,nil],
#  [nil,nil,nil,nil,nil,nil,nil,nil],
#  [nil,nil,nil,nil,nil,nil,nil,nil],
#  [ :P , :P , :P , :P , :P , :P , :P , :P ],
#  [ :R , :K , :B , :Q , :K , :B , :K , :R ]]

# [[:R, :P, nil, nil, nil, nil, :P, :R],
#  [:K, :P, nil, nil, nil, nil, :P, :K],
#  [:B, :P, nil, nil, nil, nil, :P, :B],
#  [:Q, :P, nil, nil, nil, nil, :P, :Q],
#  [:K, :P, nil, nil, nil, nil, :P, :K],
#  [:B, :P, nil, nil, nil, nil, :P, :B],
#  [:K, :P, nil, nil, nil, nil, :P, :K],
#  [:R, :P, nil, nil, nil, nil, :P, :R]]