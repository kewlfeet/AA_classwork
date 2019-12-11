class FixUniqueArtworkAndArtists < ActiveRecord::Migration[5.2]
  def change
    #Remove indices from artwork
    remove_index :artworks, column: :artist_id
    remove_index :artworks,  column: [:title, :artist_id ]

    #remove indices from artwork_shares
    remove_index :artwork_shares, column: :artwork_id
    remove_index :artwork_shares,  column: :viewer_id
    remove_index :artwork_shares,  column: [:viewer_id, :artwork_id]

    #add indices to artwork
    add_index :artworks, [:title, :artist_id ], unique: true
    add_index :artworks, :artist_id

    #add indices to artwork shares
    add_index :artwork_shares, [:viewer_id, :artwork_id], unique: true
    add_index :artwork_shares, :artwork_id
    add_index :artwork_shares, :viewer_id
  end
end
