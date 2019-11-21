class Board
    attr_reader :val
    def initialize
        @board = Array.new(8) { Array.new(8, Piece.new) }
        @board.each_with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                if row_idx.match?(/[0,7]/)
                    case col_idx
                    when 0, 2
                    end
                end
            end
        end
    end
end

# king - [0, 4], [7, 4]
# queen [0, 3], [7,3]
# bishop [0,2], [0,5], [7,2], [7,5], 
# knight [0,1], [0,6], [7,1], [7,6], 
# rook [0,0], [0,7], [7,0], [7,7], 
# pawn [2].all, [6].all

[[ R , K , B , Q , K , B , K , R ],
 [ P , P , P , P , P , P , P , P ],
 [nil,nil,nil,nil,nil,nil,nil,nil],
 [nil,nil,nil,nil,nil,nil,nil,nil],
 [nil,nil,nil,nil,nil,nil,nil,nil],
 [nil,nil,nil,nil,nil,nil,nil,nil],
 [ P , P , P , P , P , P , P , P ],
 [ R , K , B , Q , K , B , K , R ]]