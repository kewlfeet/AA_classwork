

json.pokemon do
    json.extract!(@pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids)
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.items do
  @pokemon.items.each do |item|
    # json.id item.id
    # json.name item.name
    # json.pokemon_id item.pokemon_id
    # json.price item.price
    # json.happiness item.happiness
    # json.image_url item.image_url
    json.extract!(item, :id, :name, :pokemon_id, :price, :happiness, :image_url)
  end
end