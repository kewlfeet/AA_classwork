require 'tdd'
require 'rspec'

describe '#my_uniq' do
  it "removes duplicates from an array" do
    a = [1,2,1,3,3]
    b = ['a','f','a','x','y','z','z','z','z']
    c = [56,78,78,78,99,110,110]
    expect(my_uniq(a)).to eq(a.uniq)
    expect(my_uniq(b)).to eq(b.uniq)
    expect(my_uniq(c)).to eq(c.uniq)
  end
end

describe Array do
  describe '#two_sum' do
    it 'finds all pairs of positions where the elements of those positions sum to zero and returns pairs sorted dictionary-wise' do
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
      expect([-1, 1, -2, 0, 4, -4, 2, 1].two_sum).to eq([[0,1], [0,7], [2,6], [4,5]])
    end
    # it 'returns pairs sorted dictionary-wise' do
    #   expect([-1, 0, 2, -2, 1].two_sum).to_not eq([[2, 3],[0, 4]])
    # end
  end
end

describe "#my_transpose" do
  # before(:each) do
  #   @a = [[1,2,3],[4,5,6],[7,8,9]]
  #   # b = my_transpose(a)
  # end
  a = [[1,2,3],[4,5,6],[7,8,9]]
  it 'converts between row-oriented and column oriented representations of grids' do
    expect(my_transpose(a)).to eq(a.transpose)
  end
  it 'does not call the built in Array#transpose method' do
    expect(a).not_to receive(:transpose)
    my_transpose(a)
  end
end

describe "#stock_picker" do
  it 'returns the most profitable pair of days in which to buy and sell the stock' do
    expect(stock_picker([1,2,3,4,5])).to eq([0,4])
  end
  it 'cannot sell the stock before buying a stock' do
    expect(stock_picker([10, 20, 30, 5, 2, 6])).to eq([0, 2])
  end
end

describe TowersOfHanoi do
  subject(:game) { TowersOfHanoi.new }

  describe "#initialize" do
    it 'initializes initial pile' do
      expect(game.pile_a).to eq((2..5).to_a)
    end
    it 'initializes two empty piles' do
      expect(game.pile_b).to eq([])
      expect(game.pile_c).to eq([])
    end
  end

  describe "#moves" do
    it 'moves disk from one pile to another' do
      initial = game.pile_a[0]
      expect(game.moves(pile_a, pile_b)).to eq(initial)
    end
  end
end
