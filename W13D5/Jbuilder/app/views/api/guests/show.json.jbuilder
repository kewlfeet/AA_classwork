
json.extract!(@guest, :name, :age, :favorite_color)

# json.gifts @guest.gifts 

# json.gifts do |title, description| 
#     json.title :title
#     json.description :description
# end

json.gifts do
    @guest.gifts.each do |gift|
        json.set!(gift.id) do
            json.extract!(gift, :title, :description)  
        end
    end
    # json.array!(@guest.gifts, :title, :description) #<- also works
end
