require 'rails_helper'
require 'shoulda/matchers'
# require 'spec_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
    # let(:incomplete_user) {User.new()}
  subject(:user) {User.new(username: "james", password_digest: "dewfeg24fdswv234", session_token: "dswsve4f2ef2efdw")}
  # subject {build(:user)}

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:session_token) }
  end
  
  # describe '::find_by_credentials' do
    # context 'user found' do
    #   #instance of User

    # end
    # context 'user not found' do
    #   #nil

    # end
  # end

  describe '::find_by_credentials' do
    before(:each) do 
      user = User.create!(
        username: 'john', 
        password_digest: BCrypt::Password.create("john123"),
        session_token: "somesessiontoken"
      )
      found_user = User.find_by_credentials('john','john123')
    end
    context 'user found' do
      #instance of User
      it 'should return an instance of User when a matching user is found' do
        expect(user.username).to eq(found_user.username)
      end
    end

    context 'user not found' do
      #nil
      it 'should return nil when a matching user is not found' do
        expect(User.find_by_credentials('james','james123')).to eq(nil)
      end

    end
  end
end
