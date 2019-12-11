# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artists = User.create([{username: "andy_warhol"}, {username: "pablo_picasso"}, {username: "leonardo_da_vinci"}])

viewers = User.create([{username: "don_sond"}, {username: "andy_wynkoop"} , {username: "trevor_uptain"}, {username: "tommy_duek"}])

warhol = Artwork.create([{title: "Marilyn Diptych", artist_id: artists[0].id, image_url: "https://learnodo-newtonic.com/wp-content/uploads/2013/07/Marilyn-Diptych-by-Andy-Warhol.jpeg"},
                        {title: "Campbell's Soup Cans", artist_id: artists[0].id, image_url: "https://learnodo-newtonic.com/wp-content/uploads/2014/09/32-Canvases-of-Campbells-Soup-Cans-1962-Andy-Warhol.jpg"},
                        {title: "Eight Elvises", artist_id: artists[0].id, image_url: "https://learnodo-newtonic.com/wp-content/uploads/2014/09/Eight-Elvises-1963-Andy-Warhol.jpg" },
        ])
picasso_and_copy = Artwork.create([{title: "Guernica", artist_id: artists[1].id, image_url: "https://media.timeout.com/images/103132498/750/562/image.jpg"},
                        {title: "Les Demoiselles d’Avignon", artist_id: artists[1].id, image_url: "https://media.timeout.com/images/103132497/750/562/image.jpg"} ,
                        {title: "Marilyn Diptych", artist_id: viewers[0].id, image_url: "Andy_warhol_bad_copy.jpg"}
                        ])

da_vinvi = Artwork.create([{title: "Mona Lisa", artist_id: artists[2].id, image_url: "https://en.bcdn.biz/Images/2017/4/27/7291ab23-2917-44ff-8a27-c9701d0b0230.jpg"},
                          {title: "The Last Supper", artist_id: artists[2].id, image_url: "https://en.bcdn.biz/Images/2017/4/27/871081b1-e1cc-4018-a951-017b603775be.jpg"},
                          {title: "The Adoration of the Magi", artist_id: artists[2].id, image_url: "https://en.bcdn.biz/Images/2017/4/27/029dfb09-85f4-4f9d-a753-aaff23b26da0.jpg" },
                          {title: "Baptism of Christ", artist_id: artists[2].id, image_url: "https://en.bcdn.biz/Images/2017/4/27/c5ec3ca6-5bb1-484c-bad5-ba2075a06248.jpg"}
                        ])