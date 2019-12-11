class Artwork < ApplicationRecord
    validates :title, :artist_id, :image_url, presence: true
    validates :artist_id, uniqueness: { scope: :title,
        message: "all artworks of artist should have unique title"}

    belongs_to :artist,
        class_name: :User,
        foreign_key: :artist_id

    has_many :artwork_shares,
        class_name: :ArtworkShare,
        foreign_key: :artwork_id

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer
    
end