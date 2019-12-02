require_relative 'PolyTreeNode.rb'

class KnightPathFinder
  attr_reader :considered_positions
  
  def initialize(starting_pos)
    @root = PolyTreeNode.new(starting_pos)
    @considered_positions = [starting_pos]
  end
  
  def self.valid_moves(pos)
      valid_pos = []
      x1, y1 = [1,-1], [2,-2] 
      x2, y2 = [2,-2], [1,-1] 
      # x[1,-1] y[2,-2] #--> [1,2] [1,-2] [-1,2] [-1,-2]  --> [2,4], [2,0], [0,4]
      # x[2,-2] y[1,-1] #--> [2,1] [2,-1] [-2,1] [-2,-1]  --> [4,0], [4,2], [0,2]
      valid_pos += KnightPathFinder.half_valid_moves(x1, y1, pos) + KnightPathFinder.half_valid_moves(x2, y2, pos)
      valid_pos
  end

  #gives 4 valid moves for the knight
  def self.half_valid_moves(x, y, pos)
    positions = []
    x.each do |xpos|
      y.each do |ypos|
        next_x, next_y = pos[0] + xpos, pos[1] + ypos
        positions << [next_x, next_y] if KnightPathFinder.valid_pos?(next_x) && KnightPathFinder.valid_pos?(next_y)
      end
    end
    positions
  end

  #checks if coordinate is on the board
  def self.valid_pos?(coordinate)
    coordinate >= 0 && coordinate < 8
  end

  def new_move_positions(pos)
      valid_pos = KnightPathFinder.valid_moves(pos)
      valid_pos.select!{|position| !@considered_positions.include?(position)}
      @considered_positions += valid_pos
      valid_pos
  end

  def build_move_tree
    arr = [@root]  
    until arr.empty?
      current = arr.shift
      valid_positions = new_move_positions(current.value)
      valid_positions.each do |position|
        node = PolyTreeNode.new(position)
        current.add_child(node)
        arr << node
      end
    end
    nil
  end
    # [0,0] , [1,2], [2,1],       [2,4], [2,0], [0,4],        [4,0], [4,2], [0,2]
  
    def find_path(end_pos)
      pos = @root.dfs(end_pos)
      trace_path_back(pos) unless pos.nil?
    end

    def trace_path_back(pos)
      path = []
      current = pos
      path.unshift(current.value)
      while current != @root
        current = current.parent
        path.unshift(current.value)
      end
      path
    end

end