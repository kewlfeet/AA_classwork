class ShortenedUrl < ApplicationRecord
     validates :long_url, :short_url, presence: true, uniqueness: true
     validates :user_id, presence: true

    belongs_to :submitter,
     class_name: 'User',
     primary_key: :id,
     foreign_key: :user_id

    
     def self.generate_short_url(user, long_url)
        ShortenedUrl.create!(
            user_id: user,
            long_url: long_url,
            short_url: ShortenedUrl.random_code
        )
     end

     def self.random_code
          exist = true
          rand = nil
          while exist == true
               rand = SecureRandom::urlsafe_base64(16)
               exist = false unless ShortenedUrl.exists?(short_url: rand)
          end
          rand
     end

end