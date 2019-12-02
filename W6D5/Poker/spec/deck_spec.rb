require 'deck'
require 'rspec'

describe Deck do
  subject(:deck) {Deck.new}

  it 'has a length of 52' do
    expect(deck.cards.length).to eq(52)
  end

  it 'contains 13 unique cards from each suit' do
    suits = [:spades, :hearts, :diamonds, :clubs]
    expect(suits.all?{|suit| deck.cards.uniq.count{|card| card.suit == suit} == 13}).to eq(true)
  end  

  describe '#deal' do
    before(:each) { @orig = deck.cards.dup}
    it 'removes the top card from the deck' do
      deck.deal
      expect(deck.cards).to eq(@orig[1..-1])
    end
    it 'returns the removed card' do
      expect(deck.deal).to eq(@orig[0])
    end
  end

  describe '#shuffle!' do
    before(:each) { @orig = deck.cards.dup }
    it 'modifies the deck' do
      deck.shuffle!
      expect(deck.cards).to_not eq(@orig)
    end
    # it 'shuffles the cards in the deck' do
    #   deck.shuffle!
    #   expect(deck.cards.sort).to eq(@orig.sort)
    # end
    # the above comments require a sort method in the Card class
    it 'returns the same instance of Deck' do
      expect(deck.shuffle!).to eq(deck) 
    end
  end
end