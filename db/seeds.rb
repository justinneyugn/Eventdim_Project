# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Event.destroy_all

user1 = User.create(email: 'test@gmail.com', password: 'testtest')
user2 = User.create(email: 'judnguyen@ucdavis.edu', password: 'jus2020$')
user3 = User.create(email: 'hello@gmail.com', password: 'hellohello')

event1 = Event.create(title: "Mix + Mingle - Sacramento's Largest Free Business Networking Event",
    details: "Welcome Back! Sacramento's Largest Networking Mixer is back for the Spring Blossom kick off.

    Please join us on Thursday, March 31st at the Mix Downtown for business networking and a social mixer unlike any other in Sacramento from 5pm-9pm
    
    We are the largest and fastest growing networking group, mixer and social event in Sacramento. Over 450 professionals from all different industries attended the last mixer. This is a great way to meet someone new, grow your circle of influence, find new career opportunities, generate awareness for your brand or business and to meet other professionals! This event is open to the piublic via tickets.
    
    *For limited table reservations and bottle service please contact Trevor Fong directly at 916.996.5024.
    
    Event Highlights Include:
    
    - Professional, Business Networking + Social Mixer IG:_mixandmingle_
    
    - Interactive Photo Booth by Colby Barrett Photography IG: @cb_photography916
    
    - Event Photo + Video by Black Tape Company IG: @blacktapecompany @virfxmoore
    
    - DJ 5pm-9pm by TwoDirty IG: @twodirtymusic",
    creator_id: user1.id,
    location: "Mix Downtown",
    ticket_price: 0.00)

    file1 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/mix_and_mingle.jpeg')
    event1.photo.attach(io: file1, filename: 'mix_and_mingle.jpg')

event2 = Event.create(title: "Loud Festival",
    details: "Loud Festival is a three-day event, held at Cesar Chavez Park. This inaugural year, the festival will be headlined 
    by one of the most famous rappers in the game, Rick Ross. This was no small feat for a new, relatively small music festival.
    Performances take place on over three days by local, Regional and national acts. There will be appearances by television 
    personalities as well as household name comedians. These personalities will serve as co-host for the festival along with the 
    on-air radio disc jocks from 102.5 KSFM.",
    creator_id: user1.id,
    location: "Cesar Chavez Plaza",
    ticket_price: 65.00)

    file2 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/loud_festival.jpeg')
    event2.photo.attach(io: file2, filename: 'loud_festival.jpeg')

event3 = Event.create(title: "Sacramento Grilled Cheese Festival 2022",
    details: "The Sacramento Grilled Cheese Festival is a full weekend of events dedicated to the one food you never out grow.... GRILLED CHEESE! We've paired our grilled cheese with everything from craft beer to bounce houses so we've got something for everyone.

    Sunday May 15th
    
    All-Ages Grilled Cheese Festival (11:00am - 5:00pm)
    
    This family-friendly festival has something for everyone! Just $10 gets you admission to the event, live music, games for every age group, and more. Kids ages 5 and under are FREE! Once inside, you'll be able to purchase sandwich bites (about 1/4 sandwich) from all of our participating vendors. Bites are served instead of whole sandwiches so you can try them all. Options will range from classic cheese-only sandwiches to intricate and creative melts. A wide range of dessert & beverage options will be offered as well.
    
    Looking for a more grown up grilled cheese experience? Click HERE to learn more about the 21+over grilled cheese & craft beer tasting event on Saturday May 14th.
    
    FAQ:
    
    This event will be held rain or shine. 
    This event is CASH ONLY. Any on-site purchases of food, souvenirs, etc. require cash. ATMs will be available on-site. 
    Please bring your ID with you. This event requires age verification to purchase alcohol.
    Children ages 5 and under do not need a ticket for admission.
    No pets allowed. Only ADA compliant service dogs will be admitted.
    Please feel free to bring...cash, water bottles, cameras/phones, blankets/folding chairs.
    Please DO NOT bring... alcohol, pets, outside food/drink (except for water), glass bottles or aluminum cans.
    Gluten free options will be available. 
    Tickets are non-refundable but may be transferred to another person. Refunds will be issued ONLY if the event is canceled in its entirety. All Ticket Sales Are Final – No Money Refunded – No Exchanges. In the event of postponement of the event the ticket will be honored on the date the event is held.
    Visit www.SacGrilledCheese.com for additional information.",
    creator_id: user3.id,
    location: "Southside Park",
    ticket_price: 8.00)

    file3 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/grilled_cheese.jpeg')
    event3.photo.attach(io: file3, filename: 'grilled_cheese.jpeg')

event4 = Event.create(title: "Self Care Sundays | Season 3 Opener at the Old Sugar Mill Winery",
    details: "By taking part in this event you grant the event organizers full rights to use the images resulting from the photography/video filming, and any reproductions or adaptions of the images for social media, press releases, and fundraising opportunities.

    About SELF CARE SUNDAYS:
    
    Self Care Sundays is a bi-weekly outdoor event for our Sacramento community to come together and practice self care. 
    Self Care Sundays will include a 30 min workout session and various self-care activities such as tea tastings, gardening, 
    vision board making, paint & sip, and much more. Self Care Sunday will give the community a safe space to relax and share the 
    importance of taking care of the mind, body, and soul!",
    creator_id: user2.id,
    location: "Old Sugar Mill",
    ticket_price: 35.00)

    file4 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/self_care.jpeg')
    event4.photo.attach(io: file4, filename: 'self_care.jpeg')

event5 = Event.create(title: "Margarita Fest",
    details: "Come Celebrate Cinco de Mayo with us at the Margarita Fest!
    When:
    Saturday, April 30th & Sunday, May 1st
    Performances by:
    Saturday, April 30th
    Lighter Shade of Brown, Mellowman Ace, Natalie La Rose, Marcos Hernandez, Midnight Players, Midtown Soul and more!
    Sunday, May 1st
    Malo, Delfonics featuring Greg Hill, Maya Band and so much more!
    Where:
    Cesar Chavez Park -910 I Street, Sacramento, Ca
    Time:
    Saturday - 12noon - 8:00pm
    Sunday - 11:00am - 7:00pm
    Tickets:
    VIP $60.00 one seat in section in front of stage
    General Admission March - $20.00
    General Admission April - $25.00
    General Admission May $30.00
    General Admission Door Price - $35.00
    Kids 12 & under FREE
    *** Tickets are non refundable.***",
    creator_id: user2.id,
    location: "Cesar Chavez Plaza",
    ticket_price: 60.00)

    file5 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/margarita.jpeg')
    event5.photo.attach(io: file5, filename: 'margarita.jpeg')


event6 = Event.create(title: "Celebrating The Life of Deacon Dr. Timothy D. Poston, Sr.",
    details: "Celebration Musical:
    Monday, April 4, 2022 | 7:00PM
    Doors open at 6:00PM
    Celebration Service:
    Tuesday, April 5, 2022 | 11:00AM
    Viewing: 9:45AM - 10:45AM. Doors open at 9:30AM
    * Masks and pre-registration are required for both events.
    If you have questions or need assistance with registration, call 707-425-1849 Monday-Friday, 9:00am - 5:00pm PT",
    creator_id: user1.id,
    location: "St. Paul Baptist Church",
    ticket_price: 0.00)

    file6 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/deacon.jpeg')
    event6.photo.attach(io: file6, filename: 'deacon.jpeg')


event7 = Event.create(title: "Aries Moon Circus presents... That Circus Show!",
    details: "THAT CIRCUS SHOW is a modern take on vintage circus, featuring amazing acrobatics, awesome aerials, jaw-dropping juggling, superior strength, lazy lions, and word has it there may even be some beautiful bearded ladies afoot, so be sure to dress to impress! 
    This show is FAMILY FRIENDLY and ALL AGES!
    AERIAL ARTS
    TRAPEZE MIMES
    JUGGLING
    ACRO YOGA
    HANDSTAND MAGIC
    HULA HOOPERS ON ROLLER SKATES
    FEATS OF STRENGTH
    WHIPS
    And so much more! 14 fully choreographed acts!
    ",
    creator_id: user3.id,
    location: "The Colonial Theatre",
    ticket_price: 35.00)

    file7 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/circus.jpeg')
    event7.photo.attach(io: file7, filename: 'circus.jpeg')

event8 = Event.create(title: "Muddy Princess Sacramento, CA",
    details: "Our event is for Princesses of all sizes, ages and fitness levels. We don’t focus on fastest times or competitions, we focus on fun so be prepared to run, walk, crawl, climb, slide, balance and laugh your way along our course for an amazing “girls dirty day out!”

    We have no limits on the size of your team, it can be as many Princesses as you can convince to join you for a day in the mud! Please don’t feel excluded if you are entering as an individual, all of our Princesses are part of our Muddy Princess family and there will always be help and support to ensure everybody makes it over the obstacles and crosses the finish line at their own pace.
    
    The event venue opens at 8:00am for registration with the first wave starting at 9:00am and continuing every 15 minutes (9:00, 9:15, 9:30 etc) up until the last wave of the day. Please choose your preferred start time when choosing your ticket. PLEASE NOTE – for safety reasons, each wave has limited numbers and once it is full there will be no additions allowed and no exceptions.
    
    Spectators are welcome at no additional fee so bring your husband, kids and cheering squad. We have a Village where they can cheer you at the Start and celebrate you at the Finish Line. They can explore the food and drink stalls, or sit and relax while they wait for you to have your fun in the mud. Please Note - We do not have a designated spectator zone along the course. Due to the different set ups at each venue, we cannot specifically keep spectators off the course but, we do ask that you respect the privacy of all our Princesses and please stay in the Village area while waiting for your Princess to return.
    
    We have a Bag Drop ($5 on the day) where you can leave your stuff until you have completed the course. Parking will be $10 and VIP Parking is $20 (limited availability)",
    creator_id: user1.id,
    location: "Murieta Equestrian Center",
    ticket_price: 49.00)

    file8 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/muddy.jpeg')
    event8.photo.attach(io: file8, filename: 'muddy.jpeg')
    

event9 = Event.create(title: "Bass Therapy w/ Xhale Ghost & More!",
    details: "Sacramento Bass Therapy returns!

    We're bringing an elevated experience with bigger sound, lasers and more! Featuring underground Bass act Xhale Ghost, bringing a blistering yet dynamic sound seldom heard in the EDM realm.
    Along with a stacked lineup ft some of Sacramento's best upcoming artists. Come join us for a night of headbanging fun at the Colonial Theater!
    3522 Stockton Blvd, Sacramento, CA 95820
    Lineup:
    Xhale Ghost (LIVE)
    Smiley
    Hue Hazey b2b Big Coach
    MDNGHT
    Two Dirty
    - 18+ to dance 💃
    - No Dress Code 👕
    - Good Vibes 🔮
    - Good Music 🎶v",
    creator_id: user1.id,
    location: "The Colonial Theatre",
    ticket_price: 17.00)

    file9 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/bass.jpeg')
    event9.photo.attach(io: file9, filename: 'bass.jpeg')

event10 = Event.create(title: "Sacramento Vegan Food Festival Spring 2022",
    details: "Sacramento Vegan Food Festival moves to CAPITOL MALL Downtown Sacramento.

    Closing down multiple city blocks with multiple stages for Live Music, Guest Speakers and Cooking Demonstrations.
    
    Lots more food vendors than before, more entrances and lots more entertainment. Also extending the hours due to popular demand. From 11am to 7pm . Giving you more time for food options and drinks. This festival is also now a biannual event with a Spring Edition and a Fall Edition. All 100% Plant-Based Food Event!! Get your tickets early and save. Limited time for Early Bird Price, so get your tickets early!! Children 12 & Under are Free!!",
    creator_id: user2.id,
    location: "Capitol Mall",
    ticket_price: 15.00)

    file10 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/vegan.jpeg')
    event10.photo.attach(io: file10, filename: 'vegan.jpeg')

event11 = Event.create(title: "Sunday Movie Matinees at the Guild",
    details: "Join us for free family movies at the Guild Theater!
    ****
    Date: First Sunday of each month
    Time: 2pm Showtime
    Location: Guild Theater (2828 35th Street)
    ****
    Movie Lineup:
    December - Santa Hunters
    January - Annie
    February - Ruby Bridges
    March - Hidden Figures 
    April - Black Panther
    May - A Wrinkle in Time
    June - The Princess and the Frog
    July - Jungle Cruise
    Note: Movies are subject to change
    ****
    Parking
    Free parking is available for guests in the lot adjacent to the Guild Theater. Additional street parking is available for free.
    ****
    COVID Protocols
    Proof of vaccinations or a negative COVID test are not required to attend, however the Guild Theater adheres to all Sacramento County COVID protocols including requiring all guests wear a mask indoors. Additionally, temperature checks will be taken at the door and all guests are provided with hand sanitizer upon entering.
    ****
    About St. HOPE
    St. HOPE is a nonprofit community development organization whose mission is to revitalize Oak Park through Public Education and Economic Development. St. HOPE Public Schools is a free public charter school organization serving students in grades PreK-12 at PS7 Elementary and Middle School and Sacramento Charter High School.",
    creator_id: user3.id,
    location: "The Guild Theater",
    ticket_price: 0.00)

    file11 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/matinees.jpeg')
    event11.photo.attach(io: file11, filename: 'matinees.jpeg')

event12 = Event.create(title: "Brunch In The Park",
    details: "Chasten Gold Nonprofit is hosting Brunch in the Park for the 1st time this year in Sacramento, CA after cancellations in 2020. Brunch in the Park anticipates 2,500+ attendees and will feature Bottomless Mimosas, Bloody Mary's by Tito's Vodka, and Beer and Wine from local breweries and wineries. Brunch favorites will be made available for purchase by local food trucks and restaurants.
    Each attendee will be given a souvenir glass and an overall epic day of brunch and beverage sampling. Proceeds will benefit the 501c3 Chasten Gold Nonprofit, FEIN: 84-2404682.",
    creator_id: user1.id,
    location: "Franklin D. Roosevelt Park",
    ticket_price: 75.00)

    file12 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/brunch.jpeg')
    event12.photo.attach(io: file12, filename: 'brunch.jpeg')
    

event13 = Event.create(title: "Bradley Ranch Winery 3rd Annual Egg Drop! Elk Grove",
    details: "The Easter Egg Hunt for kids will start at 10:30am promptly. There will only be 1 egg hunt for all ages.
    We will have over 5000 candy and toy filled eggs! With a few golden eggs for special prizes!
    Wine tasting, food trucks, craft fair, face painting, jump houses, fishing, wagon rides, and games will begin right after the Easter Egg Hunt - come spend the afternoon at the ranch!
    Space is limited so sign up early.
    $25 for each egg hunter.
    This is a private ticketed event. All egg hunters need a ticket. Only ticket holders will be allowed to enter the egg hunt.
    Free Parking - No refunds.",
    creator_id: user2.id,
    location: "Bradley Ranch Winery",
    ticket_price: 25.00)

    file13 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/bradley_ranch.jpeg')
    event13.photo.attach(io: file13, filename: 'bradley_ranch.jpeg')
    

event14 = Event.create(title: "BSMF: Girlfriend's Day Retreat",
    details: "Black Sistahs Making Friends: Girlfriend's Day Retreat is a one-day sister bonding event with fun, food, and games. A day to make new connections and new friends.
    Come prepared for outdoor games so dress comfortably (No Heels). Bring your smiles and warm spirit. You may never know who needs it. There will be group discussions and panels. This event is meant to do more than just shake a hand. The goal is to make a friend. We look forward to seeing all our beautiful sisthahs.
    There will be continental breakfast and lunch.
    Registration: 10am-11am
    All attendees must be 18 or older.
    No children are permitted.
    This event is sponsored by Lady Charmaine and Black Sistahs Making Friends Facebook Group:
    Mary & Berries Beauty
    Wellness of Life
    Prairie Spring Estates
    Training with Troya
    Last Call Mobile Bartending Service
    There are no refunds. In case of bad weather conditions, the event will be rescheduled and all ticket purchases will be honored.",
    creator_id: user3.id,
    location: "Prairie Spring Estates",
    ticket_price: 45.00)

    file14 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/girlfriends.jpeg')
    event14.photo.attach(io: file14, filename: 'girlfriends.jpeg')


event16 = Event.create(title: "Chicano Batman",
    details: "Los Angeles psych-soul four-piece Chicano Batman live at the Crest",
    creator_id: user2.id,
    location: "Crest Theatre",
    ticket_price: 28.00)

    file16 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/batman.jpeg')
    event16.photo.attach(io: file16, filename: 'batman.jpeg')

event17 = Event.create(title: "Old Sugar Mill Wedding Open House 2022",
    details: "Join us at the Old Sugar Mill Wedding Open House.

    Meet our preferred vendors
    Complimentary Wine Glass and Champagne Pour
    Self Guided Tours of the Venue
    Free Admission with advance registration
    See the latest trends in wedding & event design
    Food Trucks onsite",
    creator_id: user3.id,
    location: "Old Sugar Mill",
    ticket_price: 0.00)

    file17 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/wedding.jpg')
    event17.photo.attach(io: file17, filename: 'wedding.jpeg')

event18 = Event.create(title: "Trish's All White Birthday Party",
    details: "Trish is at it again! Celebrating her birthday, the only way she knows how, with style, class, and drama free!
    Come out, May 14th, 2022, to party and celebrate the life of this amazing queen. Come in your best All White Attire.
    DJ Mel and DJ Smurf will be in the building
    Doors open at 9:00pm. This birthday bash is for the Grown & Sexy. So, bring good vibes only and lets party.
    Tickets- $20.00/$30.00
    This event is - 21+ Up
    DRESS CODE STRICTLY ENFORCED!!! DRESS to Impress All White, Grown & Sexy Attire
    No T-shirts, hoodies, or baseball caps.
    For more information, contact 916concertseries@gmail.com",
    creator_id: user1.id,
    location: "1107 Firehouse Alley
    Sacramento, CA 95814",
    ticket_price: 30.00)

    file18 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/trish.jpeg')
    event18.photo.attach(io: file18, filename: 'trish.jpeg')

event19 = Event.create(title: "Sunday Morning Vibes",
    details: "Sunday Morning Vibes is Sacramento's newest talk show that occurs every Sunday from 10am-2pm

    Every Sunday morning from 10am-11am we'll interview an artist in front of a live crowd of twenty people. From 12pm-2pm the audience will enjoy an intimate performance by our featured artist of the week. The audience can enjoy the wonderful taste of fresh brewed coffee / tea from some of your local hot spots while listening to the sweet sound of music and getting to know some of the dopest artists our city has to offer. Start your Sundays with the right vibe.",
    creator_id: user2.id,
    location: "3400 Broadway",
    ticket_price: 10.00)

    file19 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/vibes.jpeg')
    event19.photo.attach(io: file19, filename: 'vibes.jpeg')

event20 = Event.create(title: "Delta High School - Disney's Lion King Jr.",
    details: "THANK YOU to our amazing sponsors! IF YOU'D LIKE TO JOIN THEM (and have your company logo printed in the program), please select a date to purchase tickets and see our sponsorship or custom donation options. :) Need logo by March 16th, but donations welcome anytime! :) THANK YOU Clark Pacific, Elevation Ten, Stillwater Orchards, Heringer Estates, Carvalho Family Winery, The Clarksburg Marina, Dinky Diner, Bogle Vineyards, Kirchoff Family Wines, Freeport Bar + Grill, Husick's Taphouse, Twisted River Wines and S.H. Merwin and Sons, Inc.

    The African savannah comes to life in Disney's The Lion King Jr. Follow Simba and an unforgettable cast of characters in the journey from Pride Rock to the jungle... and back again, in this inspiring, coming-of-age tale.",
    creator_id: user3.id,
    location: "Clarksburg Middle School Auditorium",
    ticket_price: 10.00)

    file20 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/delta.jpeg')
    event20.photo.attach(io: file20, filename: 'delta.jpeg')

event21 = Event.create(title: "Girls Night Out",
    details: "The all new #GirlsNightOut #GNO

    Every Thursday at Liaison Lounge. Call your girlfriends and come for some dancing, drinking and fun.
    
    We will have DJ Supe playing the best in R&B, Throwbacks, 90s, 2000s, and todays hits.
    
    Take advantage of our 2 for 1 special at the bar from 8pm-10pm and grab something tasty to eat.
    
    Get cute and come through! No Cover
    
    Who’s coming?",
    creator_id: user3.id,
    location: "Liaison Lounge",
    ticket_price: 0.00)

    file21 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/gno.jpeg')
    event21.photo.attach(io: file21, filename: 'gno.jpeg')

event22 = Event.create(title: "SacJobs Spring Career Fair",
    details: "Whether you're unemployed or simply looking to make a career change, you will have the opportunity to network, learn the skills needed to land your dream job, or even get hired on the spot!",
    creator_id: user1.id,
    location: "Lions Gate Hotel",
    ticket_price: 0.00)

    file22 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/sacjobs.png')
    event22.photo.attach(io: file22, filename: 'sacjobs.png')




# event15 = Event.create(title: "Selfish Sunday",
#     details: "@hellawellthy celebrates the pursuit of extreme physical, mental and social wellness through curated events, workshops and retreats. We invite you to skip brunch and cultivate wellness at Selfish Sunday.

#     Selfish Sunday!
    
#     YOGA: We'll start the day with Kemetic yoga, led by Angie Franklin, Founder + CEO of Afro Yoga. (afroyoga.org, @afroyogabyangie on Instagram) Kemetic Yoga is a gentle and intentional practice, with heavy attention to the breath, alignment and sequencing. It's a tonic to the nervous system and a moving meditation.
#     JOURNAL WORKSHOP: Learn how intentional journaling can improve mental health, inspire creativity and propel you forward in your pursuit of personal growth.
#     WELLNESS CIRCLE: Connect and mingle with like-minded people who share a passion for wellness. Topics include mental health, therapy, physical and social wellness.
#     SHOP OUR WELLNESS MARKET: Featuring wellness-centric brands and products.
#     DJ - music played by Sacramento's @Dj__2raw
#     Raffles & Giveaways!
    
#     Enter to win a Hella Wellthy gift basket ($500 value!)
#     Don't be late! The first 25 guests will receive a Hella Wellthy swag bag upon entry!",
#     creator_id: user1.id,
#     location: "The Urban Hive",
#     ticket_price: 30.00)

#     file15 = open('https://eventdim-seeds.s3.us-west-1.amazonaws.com/girlfriends.jpeg')
#     event15.photo.attach(io: file15, filename: 'girlfriends.jpeg')