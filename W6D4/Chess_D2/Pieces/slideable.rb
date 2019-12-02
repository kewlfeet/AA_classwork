require "byebug"
module Slideable

    def horizontal_dirs
        horizontal_dirs = []
        horizontal_dirs += self.check_h(self.board, false) + self.check_h(self.board.transpose, true)
        
    end
    
    def check_h(grid, transposed)   
        start = self.pos
        p_color = self.color
        hor_dirs = []
        o_color = p_color == :W ? :B : :W

        grid.each.with_index do |row, r|
            if r == start[0]
                (r - 1).downto(0) do |c|
                    break if  r < 0 || grid[r][c].color == p_color
                    transposed ? hor_dirs << [c, r] : hor_dirs << [r, c]
                    break if grid[r][c].color == o_color
                end
                (r + 1).upto(7) do |c|
                    break if r > 7 || grid[r][c].color == p_color
                    transposed ? hor_dirs << [c, r] : hor_dirs << [r, c]
                    break if grid[r][c].color == o_color
                end
            end
        end
        hor_dirs
    end

    def diagonal_dirs
        #[r,c]
        # [+1,-1] ,[+1,+1], [-1,+1] ,[-1,-]

        

        grid.each.with_index do |row, r|
            row.each_with_index do |col, c|
                if [r,c] == start

                end
            end
                
        end
        diag_dirs

    end

    def check_d(r_incr, c_incr)
        start = self.pos
        p_color = self.color
        diag_dirs = []
        o_color = p_color == :W ? :B : :W
        cur_r = start[0] + r_incr
        cur_c[1] = start[1] + c_incr
        while 

            diag_dirs << cur_pos
            break if self.board[cur_r][cur_c].color == o_color
            cur_r += r_incr
            cur_c += c_incr
        end
    end

    def moves
    end
    
    def move_dirs
        
    end
    
    def grow_unblocked_moves_in_dir(dx, dy)
    end
end
