class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true,
    message: "Password needs to be atleast 6 characters"
    }
    before_validation :ensure_session_token
    attr_reader :password

    # after_initialize :ensure_session_token
    def self.find_by_credentials(email, password)
        user = User.find_by(:email, email)
        return user if user && user.is_password?(password)
        nil
    end

    def self.generate_session_token #generates new session token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token! #changes the session_token after saving (and logging out?)
        self.save!
        self.session_token = User.generate_session_token
    end

    def ensure_session_token #there to make sure session_token is set. Setting it if it isn't
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        self.password_digest == BCrypt::Password.is_password?(password)
    end


end