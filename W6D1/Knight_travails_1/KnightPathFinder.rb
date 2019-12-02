require_relative 'PolyTreeNode.rb'

class KnightPathFinder
    def self.root_node(starting_pos)
        @current_pos = PolyTreeNode.new(starting_pos)
    end
    
    def self.valid_moves(pos)
        valid_pos = []
        x1, y1 = [1,-1], [2,-2] 
        x2, y2 = [2,-2], [1,-1] 
        # x[1,-1] y[2,-2] #--> [1,2] [1,-2] [-1,2] [-1,-2]
        # x[2,-2] y[1,-1] #--> [2,1] [2,-1] [-2,1] [-2,-1]
        valid_pos += half_valid_moves(x1, y1, pos) + half_valid_moves(x2, y2, pos)
        valid_pos
    end

    def half_valid_moves(x, y, pos)
      positions = []
      x.each do |xpos|
        y.each do |ypos|
          next_x, next_y = pos[0] + xpos, pos[1] + ypos
          positions << [next_x, next_y] if valid_pos?(next_x) && valid_pos?(next_y)
        end
      end
      positions
    end

    def valid_pos?(coordinate)
      return true unless coordinate < 0 || coordinate > 7
      false
    end

    def initialize(starting_pos)
        self.root_node(starting_pos)
        @considered_positions = [starting_pos]

    end

    def new_move_positions(pos)
        valid_pos = self.valid_moves(pos)
        valid_pos.select!{|position| !@considered_positions.include?(position)}
        @considered_positions += valid_pos
        valid_pos
    end

    def build_move_tree(pos)
        arr = new_move_positions(@current_pos.value)
        valid_nodes = arr.map { |pos| PolyTreeNode.new(pos) }
        valid_nodes.each do |node|
          node.parent = @current_pos
        end
        valid_nodes.each do |node|
          build_move_tree(node)
        end
        
        
        #@current_pos.bfs(pos)
    end
    
    

  
end