require 'card'
require 'rspec'

describe Card do
  subject(:test_card) { Card.new(:K,:spades)}

  describe "#value" do
    it "returns the value of the card" do
      expect(test_card.value).to eq(:K)
    end
  end

  describe "#suit" do
    it "returns the suit of the card" do
      expect(test_card.suit).to eq(:spades)
    end
  end

end
