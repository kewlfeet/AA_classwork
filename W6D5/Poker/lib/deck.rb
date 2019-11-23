require_relative 'card'

class Deck
  SUITS = [:spades, :hearts, :diamonds, :clubs]
  VALUES = [:A,:J, :Q, :K] + (2..10).to_a

  attr_accessor :cards
  
  def self.populate
    new_deck = []
    SUITS.each do |suit|
      VALUES.each do |value|
        new_deck << Card.new(value, suit)
      end
    end
    new_deck
  end
  
  def initialize 
    @cards = Deck.populate
  end

  def deal
    self.cards.shift
  end

  def shuffle!
    self.cards.shuffle!
    self
  end
end

