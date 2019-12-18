class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true
    validates :username, :session_token, uniqueness: true

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        bcrypt = BCrypt::Password.new(user.password_digest) unless user.nil?
        return nil unless user && bcrypt.is_password?(password)
        user
    end
end
