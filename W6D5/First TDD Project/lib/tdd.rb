def my_uniq(arr)
  arr.uniq
end

class Array

  def two_sum
    pairs = []
    (0...self.length-1).each do |idx1|
      (idx1+1...self.length).each do |idx2|
        pairs << [idx1, idx2] if self[idx1] + self[idx2] == 0
      end
    end
    pairs
    # [[2, 3],[0, 4]]
  end
end

def my_transpose(array)
  transposed = Array.new(array.length) {Array.new(array[0].length)}
  array.each.with_index do |row, row_i|
    row.each.with_index do |ele, col_i|
      transposed[col_i][row_i] = ele
    end
  end
  transposed
  # array.transpose
end

def stock_picker(stock_prices)
  most_profitable = [0,0] #---days
  most_profit = 0
  (0...stock_prices.length - 1).each do |buy_day|
    (buy_day+1...stock_prices.length).each do |sell_day|
      if (stock_prices[sell_day] - stock_prices[buy_day]) > most_profit
        most_profit = stock_prices[sell_day] - stock_prices[buy_day]
        most_profitable = [buy_day,sell_day]
      end
    end
  end
  most_profitable
end

class TowersOfHanoi
  attr_accessor :pile_a, :pile_b, :pile_c

  def initialize
    @pile_a = (2..5).to_a
    @pile_b, @pile_c = [], []
  end
end