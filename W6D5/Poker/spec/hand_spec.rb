require 'rspec'
require 'hand'

describe Hand do
  subject(:hand) { Hand.new }
  describe "#cards" do
    it 'returns the cards on hand'do
      expect(hand.cards).to eq([])
    end
  end

  describe "#add_card" do
    context 'hand not full'do
      it 'adds one card to the hand' do
        expect(hand.add_card(:card)).to eq(hand.cards << :card)
      end
    end
    context 'hand full' do
      it 'does not add card if hand is full' do
        expect()
      end
    end
  end

  
end
