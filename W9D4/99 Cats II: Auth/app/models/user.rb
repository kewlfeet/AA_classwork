class User < ApplicationRecord

  validates :password_digest, presence: true
  validates :user_name, :session_token, uniqueness: true, presence: true

  attr_reader :password

  after_initialize do 
    unless self.session_token
      self.session_token = User.generate_session_token
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)
    return nil unless user && user.is_password?(password)
    user
  end

  def reset_session_token!
    self.save!
    self.session_token = User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.password_digest)
    bcrypt_password.is_password?(password)
  end





end
