# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create({email: "don@appacademy.io", password: "railsisfun"})
# # user_1.password = "railsisfun"
# # user_1.save

user_2 = User.create({email: "james@appacademy.io", password: "rubyisfun"})
# # user_2.password = "rubyisfun"
# # user_2.save

user_3 = User.create({email: "david@appacademy.io", password: "railsisfun"})
# # user_3.password = "railsisfun"
# # user_3.save