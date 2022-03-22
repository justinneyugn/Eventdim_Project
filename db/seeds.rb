# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

user1 = User.create(email: Faker::Internet.email, password: 'password')
user2 = User.create(email: Faker::Internet.email, password: 'password')
user3 = User.create(email: Faker::Internet.email, password: 'password')
user4 = User.create(email: Faker::Internet.email, password: 'password')
user5 = User.create(email: Faker::Internet.email, password: 'password')
user6 = User.create(email: Faker::Internet.email, password: 'password')
user7 = User.create(email: Faker::Internet.email, password: 'password')
user8 = User.create(email: Faker::Internet.email, password: 'password')
user9 = User.create(email: Faker::Internet.email, password: 'password')

event1 = Event.create(title: "Loud Festival",
    details: "Loud Festival is a three-day event, held at Cesar Chavez Park. This inaugural year, the festival will be headlined by one of the most famous rappers in the game, Rick Ross. This was no small feat for a new, relatively small music festival",
    date: Date.new(2022, 4, 24),
    creator_id: user1.id,
    location: "Cesar Chavez Plaza",
    ticket_price: 65.00)

event2 = Event.create(title: "Sacramento Grilled Cheese Festival 2022",
    details: "The Sacramento Grilled Cheese Festival is a full weekend of events dedicated to the one food you never out grow.... GRILLED CHEESE! We've paired our grilled cheese with everything from craft beer to bounce houses so we've got something for everyone.",
    date: Date.new(2022, 5, 15),
    creator_id: user3.id,
    location: "Southside Park",
    ticket_price: 8.00)

event3 = Event.create(title: "Muddy Princess Sacramento, CA",
    details: "Our event is for Princesses of all sizes, ages and fitness levels. We don’t focus on fastest times or competitions, we focus on fun so be prepared to run, walk, crawl, climb, slide, balance and laugh your way along our course for an amazing “girls dirty day out!”",
    date: Date.new(2022, 5, 14),
    creator_id: user7.id,
    location: "Murieta Equestrian Center",
    ticket_price: 49.00)