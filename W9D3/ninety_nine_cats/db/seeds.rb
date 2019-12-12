# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "date"

cat_1 = Cat.create({name: "Merica", birth_date: Date.new(1776,7,04), color: "black", sex: "M", description: "The most free of all cats!!!"})
cat_2 = Cat.create({name: "KeeKee", birth_date: Date.new(2012,10,30), color: "white", sex: "F", description: "KeeKee answers to no human"})
cat_3 = Cat.create({name: "Stripes", birth_date: Date.new(2010,4,20), color: "orange", sex: "M", description: "The most agile cat"})
cat_4 = Cat.create({name: "Polly", birth_date: Date.new(2008,3,30), color: "yellow", sex: "F", description: "The over-protective mom-cat"})
cat_5 = Cat.create({name: "Bandit", birth_date: Date.new(1985,6,17), color: "smokey", sex: "F", description: "The bravest of all cats!!!"})