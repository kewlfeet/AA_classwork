require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator) #O
    if self.board.over?
      return false if self.board.winner == evaluator || self.board.winner.nil?
      return true unless self.board.winner == evaluator
    end
    if self.next_mover_mark == evaluator
      #our turn
      self.children.all? {|child| child.losing_node?(evaluator)} #1
    else
      #opponent turn
      self.children.any? {|child| child.losing_node?(evaluator)} #2
    end
  end

  def winning_node?(evaluator)
    if self.board.over?
      return true if self.board.winner == evaluator
      return false unless self.board.winner == evaluator || self.board.winner.nil?
    end
    if self.next_mover_mark == evaluator
      #our turn
      self.children.any? {|child| child.winning_node?(evaluator)} #1
    else
      #opponent turn
      self.children.all? {|child| child.winning_node?(evaluator)} #2
    end
  end

#    X | O |  
#    O | X | X
#      |   | O    

#                                                       X | O | X 
#                                      NodeB(-->,:O)    O | X |     --- NodeB.next_mover_mark == :O
#                                                         | O |  
                                    
#                                   X | O | X                                             X | O | X 
#                                   O | X | X   --- NodeC.next_mover_mark == :X           O | X | X   --- NodeD.next_mover_mark ==:X  
#                                     |'O'| O                                            'O'|   | O 
                                    

#                                   X | O | X                                      |     X | O | X 
#                                   O | X | X   --- NodeE                          |     O | X | X   --- NodeF
#                                  'X'| O | O                                      |     O |'X'| O 
     
# NodeB.winning_node?(:X)   ------NodeB.next_mover_mark === :O

# #NodeC.winning_node?(:X)  &&  NodeD.winning_node?(:X)   ---------next_mover_mark === :O
# NodeC.winning_node?(:X)  -- 

# NodeD.winning_node?(:X) -- 

# NodeF.winning_node?(:X)  -- 

# # NodeC.next_mover_mark --> :O


  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    @children = []
    (0..2).each do |x|
      (0..2).each do |y|
        if @board.empty?([x, y])
          position = [x, y]
          new_board = @board.dup
          new_board[position] = @next_mover_mark
          @children << TicTacToeNode.new(new_board, TicTacToeNode.next_mark(@next_mover_mark), position)
        end
      end
    end
    @children
  end

  def self.next_mark(current_mark)
    current_mark == :x ? :o : :x
  end

end
