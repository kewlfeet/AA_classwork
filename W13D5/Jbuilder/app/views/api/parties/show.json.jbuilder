json.extract!(@party, :name, :location)

# json.set!(:guests, @party.guests) do |guest|
#   json.set!(:name, guest.name)
#   json.set!(:gifts, guest.gifts, :title)
# end

json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end


