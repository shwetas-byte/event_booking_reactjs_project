import myimg from '../image/explore.png'
import { GiDrumKit } from "react-icons/gi";


import workshop1 from '../image/workshop1.png'
import workshop2 from '../image/workshop2.png'
import workshop3 from '../image/workshop3.png'
import corporate from '../image/cor.png'


import musicEvent1 from '../image/music1.png'
import musicEvent2 from '../image/music2.png'
import musicEvent3 from '../image/music3.png'
import musicEvent4 from '../image/music4.png'
import trend3 from '../image/trend3.png'


import culture1 from '../image/culture1.png'
import culture2 from '../image/culture2.png'
import culture3 from '../image/culture3.png'

import artEvent1 from '../image/art1.png'
import artEvent2 from '../image/art2.png'
import artEvent3 from '../image/art3.png'

import foodEvent1 from '../image/food1.png'
import foodEvent2 from '../image/food2.png'
import foodEvent3 from '../image/food3.png'

import sports1 from '../image/sports1.png'
import sports2 from '../image/sports2.png'
import sports3 from '../image/sports3.png'

import adventure1 from '../image/ad1.png'
import adventure2 from '../image/ad2.png'
import adventure3 from '../image/ad3.png'

import nightlife1 from '../image/night1.png'
import nightlife2 from '../image/night2.png'

import { IoMdTime } from "react-icons/io";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';




export  const Events = [
  {
    id: 1,
    date: "12",
    month: "SEP",
    day: "SAT",
    category: "Music",
    title: "Midnight Music Festival",
    location: "Bhopal",
    venue: "Courtyard by Marriott, Airport Road, Bhopal, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "7:00 PM",
    description: "Step into an unforgettable night of live music, electrifying performances, and an atmosphere that comes alive after dark. Experience the perfect blend of music, energy, and unforgettable moments.",
    about: "The Midnight Music Festival brings together electrifying live acts under the open night sky. Expect powerful sound, immersive lighting, and a lineup that spans genres for every kind of music lover. Food stalls and chill-out zones keep the night comfortable between sets.",
    price: 1499,
    image: musicEvent1,
    schedule: [
      { time: "7:00 PM", title: "Guest Entry & Check-in" },
      { time: "7:45 PM", title: "Opening DJ Set" },
      { time: "9:00 PM", title: "Live Music Performances" },
      { time: "11:00 PM", title: "Headliner Performance" },
      { time: "12:30 AM", title: "Festival Finale" }
    ]
  },

  {
    id: 2,
    date: "27",
    month: "May",
    day: "TUE",
    category: "Workshop",
    title: "Creative Art Workshop",
    location: "Indore",
    venue: "The Creative Art Studio, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Casual & Comfortable",
    time: "11:00 AM",
    description: "Unleash your creativity in an inspiring space where imagination meets artistic expression. Explore colors, techniques, and ideas while creating something uniquely your own.",
    about: "A hands-on workshop for beginners and hobbyists to explore their artistic side. Guided by experienced instructors, you'll learn color theory, brush work, and composition using materials provided on the spot. Walk away with your own finished artwork and a few new skills.",
    price: 999,
    image: workshop1,
    schedule: [
      { time: "11:00 AM", title: "Welcome & Registration" },
      { time: "11:30 AM", title: "Introduction to Art Techniques" },
      { time: "12:30 PM", title: "Hands-on Creative Session" },
      { time: "2:00 PM", title: "Artwork Completion & Review" },
      { time: "2:30 PM", title: "Showcase & Closing" }
    ]
  },

  {
    id: 3,
    date: "30",
    month: "May",
    day: "FRI",
    category: "Culture",
    title: "An Evening of Kathak",
    location: "Bhopal",
    venue: "Ravindra Bhavan, Shamla Hills, Bhopal, Madhya Pradesh",
    dressCode: "Elegant Traditional",
    time: "6:30 PM",
    description: "Experience the beauty and grace of Kathak through expressive movements, rhythmic footwork, and captivating performances that celebrate India's rich classical heritage.",
    about: "An Evening of Kathak brings the timeless elegance of this classical dance form to life on stage. Renowned performers showcase intricate footwork and expressive storytelling set against traditional music and lighting. Seating is limited, so early arrival is recommended.",
    price: 1299,
    image: culture1,
    schedule: [
      { time: "6:30 PM", title: "Audience Entry & Seating" },
      { time: "7:00 PM", title: "Opening Introduction" },
      { time: "7:20 PM", title: "Traditional Kathak Performance" },
      { time: "8:15 PM", title: "Featured Dance Presentation" },
      { time: "9:00 PM", title: "Grand Finale & Closing" }
    ]
  },

  {
    id: 4,
    date: "02",
    month: "JUN",
    day: "MON",
    category: "Food & Drinks",
    title: "The Culinary Experience",
    location: "Indore",
    venue: "Sayaji Hotel, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "5:00 PM",
    description: "Discover a delightful journey of flavors featuring carefully crafted dishes, refreshing drinks, and an inviting atmosphere designed for food lovers.",
    about: "The Culinary Experience is a curated evening for anyone who loves good food and even better company. Local chefs will present a rotating menu of signature dishes, ranging from comfort classics to inventive new creations. Pair your meal with a selection of handcrafted beverages, from mocktails to specialty brews, chosen to complement each course. Live cooking stations will let you watch the magic happen up close, and there'll be plenty of opportunities to chat with the chefs themselves. Come hungry and leave with a few new favorite flavors.",
    price: 1999,
    image: foodEvent1,
    schedule: [
      { time: "5:00 PM", title: "Welcome & Guest Check-in" },
      { time: "5:30 PM", title: "Chef Introduction & Welcome Drink" },
      { time: "6:00 PM", title: "Live Cooking Experience" },
      { time: "7:00 PM", title: "Curated Food Tasting" },
      { time: "8:30 PM", title: "Dessert & Closing Experience" }
    ]
  },

  {
    id: 5,
    date: "05",
    month: "JUN",
    day: "SAT",
    category: "Art",
    title: "Contemporary Art Exhibition",
    location: "Bhopal",
    venue: "Bharat Bhavan, Shamla Hills, Bhopal, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "4:00 PM",
    description: "Explore bold ideas and modern perspectives through a curated collection of contemporary artworks created to inspire curiosity, conversation, and imagination.",
    about: "This exhibition brings together a diverse group of contemporary artists whose work challenges conventional ideas and sparks fresh conversation. Visitors can expect a mix of mediums, from bold canvases to mixed-media installations, each piece chosen for its ability to provoke thought and emotion. Guided walkthroughs will be available for those who want deeper context on the artists and their inspirations. The open gallery setting encourages slow, unhurried exploration, making it an ideal outing for art lovers and curious first-timers alike. Light refreshments will be served throughout the afternoon.",
    price: 799,
    image: artEvent1,
    schedule: [
      { time: "4:00 PM", title: "Gallery Entry & Welcome" },
      { time: "4:30 PM", title: "Exhibition Introduction" },
      { time: "5:00 PM", title: "Curated Gallery Walkthrough" },
      { time: "6:00 PM", title: "Artist Interaction Session" },
      { time: "7:00 PM", title: "Refreshments & Exhibition Closing" }
    ]
  },

  {
    id: 6,
    date: "08",
    month: "JUN",
    day: "TUE",
    category: "Adventure",
    title: "Weekend Escape",
    location: "Pachmarhi",
    venue: "Apsara Vihar Trail, Pachmarhi, Madhya Pradesh",
    dressCode: "Comfortable Outdoor Wear",
    time: "6:00 AM",
    description: "Leave the routine behind and embark on a refreshing escape surrounded by nature, scenic landscapes, and exciting outdoor experiences in the heart of Pachmarhi.",
    about: "Weekend Escape is built for anyone craving a break from city life and a reconnection with nature. The itinerary includes scenic treks through Pachmarhi's rolling hills, visits to hidden waterfalls, and plenty of time to simply soak in the surroundings. Experienced guides will lead the group, ensuring the trails are both safe and rewarding for participants of varying fitness levels. Meals and basic gear will be arranged, so all you need to bring is your energy and sense of adventure. It's the perfect short getaway to reset before heading back into the routine.",
    price: 2499,
    image: adventure1,
    schedule: [
      { time: "6:00 AM", title: "Meet-up & Safety Briefing" },
      { time: "6:30 AM", title: "Adventure Trail Begins" },
      { time: "9:00 AM", title: "Scenic Viewpoint Stop" },
      { time: "11:00 AM", title: "Waterfall Exploration & Break" },
      { time: "1:00 PM", title: "Return & Closing Gathering" }
    ]
  },

  {
    id: 7,
    date: "11",
    month: "JUN",
    day: "FRI",
    category: "Music",
    title: "Acoustic Nights",
    location: "Indore",
    venue: "Phoenix Citadel, MR-10 Road, Indore, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "8:00 PM",
    description: "Spend an intimate evening with soulful acoustic performances, soothing melodies, and a relaxed atmosphere made for music lovers.",
    about: "Acoustic Nights offers a stripped-down, intimate alternative to the usual high-energy concert scene. A handful of talented singer-songwriters will take the stage with just their instruments and voices, creating a warm, personal listening experience. The venue's cozy seating and soft lighting are designed to make every guest feel like part of a small, shared moment. Between sets, there'll be short breaks to grab a drink and chat with fellow music lovers. It's the perfect evening for anyone who prefers heartfelt melodies over loud beats.",
    price: 1199,
    image: musicEvent2,
    schedule: [
      { time: "8:00 PM", title: "Guest Entry & Seating" },
      { time: "8:30 PM", title: "Opening Acoustic Set" },
      { time: "9:15 PM", title: "Singer-Songwriter Performances" },
      { time: "10:15 PM", title: "Featured Acoustic Session" },
      { time: "11:00 PM", title: "Finale & Closing Set" }
    ]
  },

  {
    id: 8,
    date: "14",
    month: "JUN",
    day: "MON",
    category: "Sports",
    title: "City Marathon",
    location: "Bhopal",
    venue: "Upper Lake Promenade, Bhopal, Madhya Pradesh",
    dressCode: "Sportswear & Running Shoes",
    time: "6:00 AM",
    description: "Challenge yourself on an energetic city route surrounded by fellow runners, positive energy, and the excitement of reaching the finish line together.",
    about: "The City Marathon brings together runners of all levels for a morning of energy, endurance, and community spirit. The route winds through some of Bhopal's most scenic streets, with hydration points and cheer squads stationed along the way. Whether you're chasing a personal best or simply running for the experience, the atmosphere is designed to keep every participant motivated from start to finish. Medals and refreshments await all finishers at the closing celebration. It's a great way to challenge yourself while being part of something bigger.",
    price: 699,
    image: sports1,
    schedule: [
      { time: "6:00 AM", title: "Runner Check-in & Bib Collection" },
      { time: "6:30 AM", title: "Warm-up & Safety Briefing" },
      { time: "7:00 AM", title: "Marathon Begins" },
      { time: "9:30 AM", title: "Finish Line & Medal Ceremony" },
      { time: "10:00 AM", title: "Refreshments & Closing" }
    ]
  },

  {
    id: 9,
    date: "18",
    month: "SEP",
    day: "FRI",
    category: "Nightlife",
    title: "After Dark Sessions",
    location: "Indore",
    venue: "The Park, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Chic Evening Wear",
    time: "9:00 PM",
    description: "Experience Indore after dark with great music, vibrant energy, and an exciting nightlife atmosphere designed for an unforgettable evening.",
    about: "After Dark Sessions turns up the energy with a night full of great music, dynamic visuals, and a crowd ready to have a good time. Resident and guest DJs will keep the dance floor moving with sets that blend popular hits and underground favorites. The venue's lighting and sound setup are built to create an immersive club-like experience from the moment you walk in. A dedicated bar area offers a range of drinks for those looking to relax between dances. It's the go-to spot for anyone wanting to experience Indore's nightlife at its best.",
    price: 1599,
    image: nightlife1,
    schedule: [
      { time: "9:00 PM", title: "Guest Entry & Welcome" },
      { time: "9:30 PM", title: "Opening DJ Set" },
      { time: "10:30 PM", title: "Main Dance Session" },
      { time: "12:00 AM", title: "Guest DJ Performance" },
      { time: "1:30 AM", title: "Final Set & Closing" }
    ]
  },

  {
    id: 10,
    date: "20",
    month: "OCT",
    day: "TUE",
    time: "7:30 PM Onwards",
    location: "Bhopal",
    venue: "Jeet Auditorium, Arera Hills, Bhopal, Madhya Pradesh",
    dressCode: "Casual & Edgy",
    category: "Music",
    title: "Indie Rock Nights",
    icon: <GiDrumKit />,
    description: "Get ready for an energetic night of independent rock music featuring powerful performances, raw sounds, and a crowd that lives for live music.",
    about: "Indie Rock Nights celebrates the raw, unfiltered energy of independent rock bands who bring their own sound and story to the stage. Expect powerful guitar riffs, driving drum beats, and vocals that carry real emotion through every song. The lineup features a mix of established indie acts and rising talent, giving the audience a taste of where the genre is headed. The venue's setup is built for close-up, high-energy performances that keep the crowd engaged all night long. This is a night for true rock fans who love music with an edge.",
    price: 1399,
    image: trend3,
    schedule: [
      { time: "7:30 PM", title: "Doors Open & Guest Entry" },
      { time: "8:00 PM", title: "Opening Indie Act" },
      { time: "9:00 PM", title: "Rising Band Showcase" },
      { time: "10:30 PM", title: "Main Rock Performance" },
      { time: "12:00 AM", title: "Rock Finale & Closing" }
    ]
  },

  {
    id: 11,
    date: "20",
    month: "JUN",
    day: "MON",
    category: "Workshop",
    title: "Photography Masterclass",
    location: "Bhopal",
    venue: "State Museum Auditorium, Shamla Hills, Bhopal, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "10:00 AM",
    description: "Learn to capture meaningful moments through the lens with practical guidance on composition, lighting, storytelling, and creative photography techniques.",
    about: "This masterclass is designed to take participants beyond the basics of photography and into the art of visual storytelling. A professional photographer will walk through key concepts like composition, natural lighting, and framing, followed by hands-on practice sessions. Participants are encouraged to bring their own cameras, whether DSLR or smartphone, as techniques will be tailored to different equipment. Small group sizes ensure everyone gets personalized feedback on their shots throughout the day. By the end, you'll have a stronger eye for capturing meaningful, well-composed images.",
    price: 1499,
    image: workshop2,
    schedule: [
      { time: "10:00 AM", title: "Registration & Introduction" },
      { time: "10:30 AM", title: "Photography Fundamentals" },
      { time: "12:00 PM", title: "Lighting & Composition Session" },
      { time: "2:00 PM", title: "Practical Photography Walk" },
      { time: "4:00 PM", title: "Photo Review & Expert Feedback" }
    ]
  },

  {
    id: 12,
    date: "23",
    month: "JUN",
    day: "SAT",
    category: "Culture",
    title: "Stories of India",
    location: "Bhopal",
    venue: "Tribal Museum Amphitheatre, Shyamla Hills, Bhopal, Madhya Pradesh",
    dressCode: "Elegant Traditional",
    time: "6:00 PM",
    description: "Journey through India's diverse traditions, stories, and cultural heritage in an evening filled with fascinating narratives and meaningful experiences.",
    about: "Stories of India is an evening dedicated to celebrating the country's rich tapestry of traditions, folklore, and history. Skilled storytellers and performers will bring regional tales to life through narration, music, and expressive performance. Each segment of the evening focuses on a different part of India, offering guests a broad glimpse into the diversity of its culture. The setting is designed to feel warm and communal, encouraging reflection and conversation between performances. It's an enriching outing for anyone curious about India's cultural depth.",
    price: 999,
    image: culture2,
    schedule: [
      { time: "6:00 PM", title: "Audience Welcome & Seating" },
      { time: "6:30 PM", title: "Opening Cultural Introduction" },
      { time: "7:00 PM", title: "Regional Stories & Folklore" },
      { time: "8:00 PM", title: "Music & Cultural Performance" },
      { time: "9:00 PM", title: "Final Story & Closing" }
    ]
  },

  {
    id: 13,
    date: "26",
    month: "JUN",
    day: "MON",
    category: "Art",
    title: "Modern Art Showcase",
    location: "Indore",
    venue: "Lalit Kala Academy Gallery, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "5:30 PM",
    description: "Discover a collection of modern artworks that bring together fresh perspectives, creative expressions, and thought-provoking ideas from contemporary artists.",
    about: "The Modern Art Showcase highlights a new generation of artists pushing boundaries with fresh techniques and bold ideas. The exhibition spans paintings, sculptures, and digital art, each piece offering a unique lens on contemporary life and culture. Curators will be on hand to share the stories and inspirations behind selected works, adding depth to the viewing experience. The relaxed gallery layout makes it easy to wander at your own pace and revisit pieces that catch your eye. It's an evening built for anyone eager to see where modern art is headed next.",
    price: 899,
    image: artEvent2,
    schedule: [
      { time: "5:30 PM", title: "Gallery Entry & Welcome" },
      { time: "6:00 PM", title: "Curator's Introduction" },
      { time: "6:30 PM", title: "Modern Art Showcase" },
      { time: "7:30 PM", title: "Artist Interaction Session" },
      { time: "8:30 PM", title: "Gallery Closing & Refreshments" }
    ]
  },

  {
    id: 14,
    date: "29",
    month: "JUN",
    day: "WED",
    category: "Music",
    title: "Sunset Live Sessions",
    location: "Bhopal",
    venue: "Boat Club, Upper Lake, Bhopal, Madhya Pradesh",
    dressCode: "Casual & Comfortable",
    time: "6:30 PM",
    description: "Watch the sunset while enjoying live music in a relaxed setting where warm evening skies, soulful performances, and good vibes come together.",
    about: "Sunset Live Sessions pairs breathtaking evening views with soulful live performances for a truly relaxed experience. As the sky transitions into warm hues, musicians will set the mood with mellow, feel-good tracks perfect for unwinding. Guests can settle into open seating areas, order light refreshments, and simply enjoy the moment as the sun goes down. The laid-back atmosphere makes it ideal for catching up with friends or enjoying some quiet time alone. It's a simple, beautiful way to end the day.",
    price: 1299,
    image: musicEvent3,
    schedule: [
      { time: "6:30 PM", title: "Guest Entry & Seating" },
      { time: "6:45 PM", title: "Sunset Acoustic Opening" },
      { time: "7:15 PM", title: "Live Music Session" },
      { time: "8:15 PM", title: "Featured Performance" },
      { time: "9:00 PM", title: "Finale Under the Evening Sky" }
    ]
  },

  {
    id: 15,
    date: "02",
    month: "JUL",
    day: "SUN",
    category: "Food & Drinks",
    title: "Taste of the City",
    location: "Indore",
    venue: "Phoenix Citadel, MR-10 Road, Indore, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "7:00 PM",
    description: "Taste your way through the city's finest flavors with a delicious selection of local favorites, creative dishes, and refreshing beverages.",
    about: "Taste of the City brings together some of Indore's best food vendors and chefs under one roof for a night of indulgence. From beloved street food classics to inventive fusion dishes, there's something to satisfy every craving. Live counters will let you watch dishes being prepared fresh, adding an extra layer of experience to the tasting. A curated drinks section offers refreshing pairings to go along with your food journey. It's the perfect event for food lovers who want to explore the city's culinary variety in one place.",
    price: 1799,
    image: foodEvent2,
    schedule: [
      { time: "7:00 PM", title: "Welcome & Food Passport Check-in" },
      { time: "7:30 PM", title: "Chef Introductions" },
      { time: "8:00 PM", title: "Live Food Counters Open" },
      { time: "9:00 PM", title: "City Flavors Tasting Experience" },
      { time: "10:30 PM", title: "Dessert & Closing Celebration" }
    ]
  },

  {
    id: 16,
    date: "05",
    month: "JUL",
    day: "WED",
    category: "Adventure",
    title: "Into the Wild",
    location: "Pachmarhi",
    venue: "Bee Fall Trail, Pachmarhi, Madhya Pradesh",
    dressCode: "Outdoor Adventure Wear",
    time: "5:30 AM",
    description: "Reconnect with nature on an exciting outdoor adventure through scenic trails, peaceful surroundings, and the untouched beauty of Pachmarhi.",
    about: "Into the Wild is designed for those who want to step away from city noise and immerse themselves in nature. The trek covers some of Pachmarhi's most scenic and less-explored trails, guided by experienced local trekkers who know the terrain well. Along the way, participants will pass through dense forests, quiet streams, and viewpoints perfect for a quick photo stop. Safety briefings and necessary gear will be provided before setting out. It's an ideal experience for nature lovers and anyone looking for a mindful outdoor adventure.",
    price: 2299,
    image: adventure2,
    schedule: [
      { time: "5:30 AM", title: "Meet-up & Safety Briefing" },
      { time: "6:00 AM", title: "Trail Journey Begins" },
      { time: "8:30 AM", title: "Forest Trail Exploration" },
      { time: "10:30 AM", title: "Scenic Viewpoint & Rest Stop" },
      { time: "12:30 PM", title: "Return Journey & Closing" }
    ]
  },

  {
    id: 17,
    date: "08",
    month: "JUL",
    day: "SAT",
    category: "Sports",
    title: "Urban Cycling Tour",
    location: "Bhopal",
    venue: "VIP Road, Upper Lake, Bhopal, Madhya Pradesh",
    dressCode: "Sportswear & Comfortable Shoes",
    time: "7:00 AM",
    description: "Explore Bhopal on two wheels with a refreshing cycling experience that combines fitness, city exploration, and the joy of riding with others.",
    about: "The Urban Cycling Tour offers a fun and active way to see Bhopal from a fresh perspective. Riders will follow a planned route past the city's notable landmarks, lakes, and quiet streets, all while getting in a solid morning workout. The pace is kept moderate so cyclists of different fitness levels can comfortably keep up and enjoy the ride together. Rest stops along the way offer water and light snacks to keep everyone energized. It's a great mix of fitness, exploration, and community for cycling enthusiasts.",
    price: 799,
    image: sports2,
    schedule: [
      { time: "7:00 AM", title: "Cyclist Check-in & Bike Check" },
      { time: "7:30 AM", title: "Safety Briefing & Warm-up" },
      { time: "8:00 AM", title: "City Cycling Tour Begins" },
      { time: "9:30 AM", title: "Landmark & Refreshment Stop" },
      { time: "11:00 AM", title: "Finish Line & Closing" }
    ]
  },

  {
    id: 18,
    date: "11",
    month: "JUL",
    day: "FRI",
    category: "Nightlife",
    title: "The Midnight Social",
    location: "Indore",
    venue: "Sayaji Hotel, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Stylish Evening Wear",
    time: "9:30 PM",
    description: "Step into a lively midnight gathering filled with music, conversations, and an energetic atmosphere perfect for enjoying the city after dark.",
    about: "The Midnight Social is built for those who love a good mix of music, conversation, and late-night energy. The venue features multiple zones, from a lively dance area to quieter lounge corners for relaxed chats. A rotating lineup of DJs keeps the playlist fresh throughout the night, catering to a variety of musical tastes. Specialty drinks and snacks will be available to keep the energy going until the early hours. It's a great pick for anyone wanting a well-rounded night out in the city.",
    price: 1499,
    image: nightlife2,
    schedule: [
      { time: "9:30 PM", title: "Guest Entry & Welcome" },
      { time: "10:00 PM", title: "Opening Music Session" },
      { time: "11:00 PM", title: "Social & Dance Session" },
      { time: "12:30 AM", title: "Midnight DJ Performance" },
      { time: "2:00 AM", title: "Final Set & Closing" }
    ]
  },

  {
    id: 19,
    date: "14",
    month: "JUL",
    day: "MON",
    category: "Workshop",
    title: "Creative Writing Circle",
    location: "Bhopal",
    venue: "The Poetry Lounge, MP Nagar, Bhopal, Madhya Pradesh",
    dressCode: "Casual & Comfortable",
    time: "4:00 PM",
    description: "Turn your thoughts and imagination into words in a welcoming creative space where you can write, share ideas, and discover your unique storytelling voice.",
    about: "The Creative Writing Circle is a supportive gathering for anyone who wants to explore storytelling, whether you're a seasoned writer or just starting out. Guided prompts and short exercises will help spark ideas and get pens moving from the very first session. Participants will have the chance to share their work in a judgment-free environment and receive constructive feedback from the group. Facilitators will also offer tips on structure, voice, and editing to help refine your writing. It's a relaxed space to grow as a writer while connecting with fellow storytellers.",
    price: 899,
    image: workshop3,
    schedule: [
      { time: "4:00 PM", title: "Welcome & Writing Introduction" },
      { time: "4:30 PM", title: "Creative Writing Prompts" },
      { time: "5:15 PM", title: "Individual Writing Session" },
      { time: "6:15 PM", title: "Story Sharing & Feedback" },
      { time: "7:00 PM", title: "Writing Tips & Closing Circle" }
    ]
  },

  {
    id: 20,
    date: "17",
    month: "JUL",
    day: "FRI",
    category: "Culture",
    title: "Classical Evening",
    location: "Bhopal",
    venue: "Ravindra Bhavan, Shamla Hills, Bhopal, Madhya Pradesh",
    dressCode: "Elegant Traditional",
    time: "7:00 PM",
    description: "Enjoy an elegant evening celebrating India's classical traditions through graceful performances, timeless melodies, and the richness of cultural heritage.",
    about: "Classical Evening is a refined celebration of India's musical and artistic heritage, featuring performances by accomplished classical artists. The program includes vocal and instrumental pieces rooted in tradition, each performed with the depth and precision the art form demands. The venue's ambiance is carefully curated to match the elegance of the evening, with subtle lighting and comfortable seating throughout. Short introductions before each performance help guests appreciate the history and technique behind the pieces. It's an evening made for those who value timeless artistry and cultural richness.",
    price: 1399,
    image: culture3,
    schedule: [
      { time: "7:00 PM", title: "Audience Entry & Seating" },
      { time: "7:30 PM", title: "Cultural Introduction" },
      { time: "7:45 PM", title: "Classical Vocal Performance" },
      { time: "8:30 PM", title: "Instrumental & Featured Performance" },
      { time: "9:30 PM", title: "Grand Finale & Closing" }
    ]
  },

  {
    id: 21,
    date: "20",
    month: "JUL",
    day: "TUE",
    category: "Art",
    title: "The Visual Stories",
    location: "Indore",
    venue: "Lalit Kala Academy Gallery, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Smart Casual",
    time: "5:00 PM",
    description: "Explore powerful stories told through visual art, where colors, forms, and creative perspectives come together to create meaningful experiences.",
    about: "The Visual Stories exhibition focuses on artwork that goes beyond aesthetics to tell deeper, personal narratives. Each piece on display is selected for its ability to communicate emotion and perspective through color, form, and composition. Artists will be present at select times to discuss the meaning and process behind their work, offering visitors a richer understanding. The exhibition space is designed to encourage quiet reflection as you move from one story to the next. It's an engaging outing for anyone drawn to art with substance and depth.",
    price: 999,
    image: artEvent3,
    schedule: [
      { time: "5:00 PM", title: "Gallery Entry & Welcome" },
      { time: "5:30 PM", title: "Visual Stories Introduction" },
      { time: "6:00 PM", title: "Curated Artwork Walkthrough" },
      { time: "7:00 PM", title: "Artist Stories & Interaction" },
      { time: "8:00 PM", title: "Reflection & Exhibition Closing" }
    ]
  },

  {
    id: 22,
    date: "23",
    month: "JUL",
    day: "FRI",
    category: "Music",
    title: "Indie Music Evening",
    location: "Bhopal",
    venue: "Jeet Auditorium, Arera Hills, Bhopal, Madhya Pradesh",
    dressCode: "Casual & Comfortable",
    time: "8:00 PM",
    description: "Discover fresh independent sounds and talented artists in an intimate evening filled with original music, expressive performances, and a relaxed atmosphere.",
    about: "Indie Music Evening shines a spotlight on original artists creating music outside the mainstream spotlight. The lineup features a curated mix of singer-songwriters and small bands, each bringing their own distinct style and sound to the stage. The intimate venue setting allows the audience to connect closely with the performers, making every set feel personal and genuine. Between performances, there's time to relax, grab a drink, and chat about the music you just heard. It's a great evening for discovering new favorites in the indie scene.",
    price: 1199,
    image: musicEvent4,
    schedule: [
      { time: "8:00 PM", title: "Guest Entry & Seating" },
      { time: "8:30 PM", title: "Opening Indie Artist" },
      { time: "9:15 PM", title: "Singer-Songwriter Showcase" },
      { time: "10:30 PM", title: "Featured Indie Performance" },
      { time: "11:30 PM", title: "Final Performance & Closing" }
    ]
  },

  {
    id: 23,
    date: "26",
    month: "JUL",
    day: "MON",
    category: "Food & Drinks",
    title: "Weekend Food Festival",
    location: "Indore",
    venue: "Indore Food Street, Vijay Nagar, Indore, Madhya Pradesh",
    dressCode: "Casual & Comfortable",
    time: "12:00 PM",
    description: "Make your weekend delicious with a vibrant celebration of food featuring a variety of flavors, exciting dishes, and plenty of opportunities to discover something new.",
    about: "The Weekend Food Festival turns an ordinary afternoon into a celebration of flavor, bringing together a wide range of food stalls and cuisines. Visitors can wander through the festival grounds, sampling everything from local street food to international bites, all in one place. Live music and casual entertainment keep the atmosphere lively throughout the day. Family-friendly seating areas make it easy to relax between rounds of tasting. It's the perfect weekend outing for food lovers looking to explore something new with every bite.",
    price: 1599,
    image: foodEvent3,
    schedule: [
      { time: "12:00 PM", title: "Festival Entry & Welcome" },
      { time: "12:30 PM", title: "Food Stalls & Tasting Begins" },
      { time: "2:00 PM", title: "Live Cooking & Food Showcase" },
      { time: "4:00 PM", title: "Live Music & Festival Activities" },
      { time: "6:00 PM", title: "Final Tasting & Festival Closing" }
    ]
  },

  {
    id: 24,
    date: "29",
    month: "JUL",
    day: "FRI",
    category: "Sports",
    title: "Sunrise Yoga Session",
    location: "Bhopal",
    venue: "Boat Club, Upper Lake, Bhopal, Madhya Pradesh",
    dressCode: "Comfortable Activewear",
    time: "6:30 AM",
    description: "Begin your morning with a peaceful yoga session surrounded by the calm energy of sunrise, helping you stretch, breathe, and start the day refreshed.",
    about: "The Sunrise Yoga Session offers a peaceful start to the day, combining gentle movement with the calming energy of early morning light. A certified instructor will guide participants through a sequence suited for all experience levels, focusing on breathing, flexibility, and mindfulness. The outdoor setting adds a natural, grounding element to the practice, making it feel more like a retreat than a routine class. Mats and light refreshments will be provided at the end of the session. It's a simple, rejuvenating way to set a positive tone for the rest of your day.",
    price: 599,
    image: sports3,
    schedule: [
      { time: "6:30 AM", title: "Arrival & Mat Setup" },
      { time: "6:45 AM", title: "Breathing & Warm-up" },
      { time: "7:00 AM", title: "Guided Yoga Session" },
      { time: "7:45 AM", title: "Mindfulness & Relaxation" },
      { time: "8:15 AM", title: "Refreshments & Closing" }
    ]
  },

  {
    id: 25,
    date: "01",
    month: "AUG",
    day: "MON",
    category: "Adventure",
    title: "Monsoon Trails",
    location: "Pachmarhi",
    venue: "Jatashankar Cave Trail, Pachmarhi, Madhya Pradesh",
    dressCode: "Monsoon Outdoor Wear",
    time: "6:00 AM",
    description: "Experience the beauty of Pachmarhi during the monsoon as you explore refreshing trails, lush landscapes, and the natural charm of the season.",
    about: "Monsoon Trails is a specially timed adventure that captures Pachmarhi at its most vibrant, when the rains bring the landscape to life. Trekkers will move through lush green trails, past flowing streams and misty viewpoints that only appear during this season. Experienced guides will ensure the route stays safe and enjoyable despite the wet conditions, with appropriate gear recommendations shared in advance. The pace is kept relaxed, allowing plenty of time to take in the scenery and capture photos. It's a unique way to experience nature's seasonal transformation up close.",
    price: 1999,
    image: adventure3,
    schedule: [
      { time: "6:00 AM", title: "Meet-up & Monsoon Safety Briefing" },
      { time: "6:30 AM", title: "Trail Journey Begins" },
      { time: "8:30 AM", title: "Lush Forest & Stream Exploration" },
      { time: "10:30 AM", title: "Misty Viewpoint & Photo Stop" },
      { time: "12:30 PM", title: "Return Journey & Closing" }
    ]
  },

  {
    id: 26,
    date: "31",
    month: "DEC",
    day: "THUR",
    category: "Workshop",
    title: "New Year With Colleagues",
    location: "Bhopal",
    venue: "Courtyard by Marriott, Airport Road, Bhopal, Madhya Pradesh",
    dressCode: "Semi-Formal & Party Wear",
    time: "11:00 PM",
    description: "Welcome the New Year with your colleagues in a memorable evening filled with celebration, conversations, laughter, and moments to cherish together.",
    about: "New Year With Colleagues is a festive gathering designed to help teams ring in the new year together outside the usual office setting. The evening includes a mix of light entertainment, music, and casual mingling meant to strengthen bonds beyond day-to-day work. A countdown celebration at midnight will be the highlight, complete with toasts and a shared sense of excitement for the year ahead. Food and drinks will be served throughout the evening in a relaxed, party-style setup. It's a great way to close out the year on a warm, memorable note with the people you work with.",
    price: 2499,
    image: corporate,
    schedule: [
      { time: "11:00 PM", title: "Guest Entry & Team Welcome" },
      { time: "11:20 PM", title: "Games & Team Activities" },
      { time: "11:45 PM", title: "Music & Celebration Begins" },
      { time: "12:00 AM", title: "New Year Countdown & Celebration" },
      { time: "12:30 AM", title: "Dinner, Music & Closing" }
    ]
  }
];
export function Explore_events() {

  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const [selectedLocation, setSelectedLocation] =
    useState("All Locations");

  const [selectedDate, setSelectedDate] =
    useState("All Dates");

  const [showDateDropdown, setShowDateDropdown] =
    useState(false);

  const [showLocationDropdown, setShowLocationDropdown] =
    useState(false);


  const categories = [
    { name: "All Events" },
    { name: "Music" },
    { name: "Workshop" },
    { name: "Culture" },
    { name: "Food & Drinks" },
    { name: "Sports" },
    { name: "Art" },
    { name: "Nightlife" },
    { name: "Adventure" }
  ];






  // Dynamic dates from Events
  const dateOptions = [
    "All Dates",
    ...new Set(
      Events.map((event) => `${event.date} ${event.month}`)
    )
  ];


  // Dynamic locations from Events
  const locations = [
    "All Locations",
    ...new Set(
      Events.map((event) => event.location)
    )
  ];


  // Filter Events
  const filteredEvents = Events.filter((event) => {

    const categoryMatch =
      selectedCategory === "All Events" ||
      event.category === selectedCategory;


    const locationMatch =
      selectedLocation === "All Locations" ||
      event.location === selectedLocation;


    const dateMatch =
      selectedDate === "All Dates" ||
      `${event.date} ${event.month}` === selectedDate;


    return categoryMatch && locationMatch && dateMatch;

  });


  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[490px] overflow-hidden pb-9 bg-[#0B030A]">

        <img
          src={myimg}
          alt="Explore Events"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="relative z-10 py-30 px-20">

          <div className="w-full">

            <h1 className="font-serif text-8xl md:text-7xl text-[#FAF8F6] leading-tight">

              Explore

              <span className="block text-[#dc2276] italic">
                Experiences
              </span>

            </h1>


            {/* Decorative Line */}

            <div className="flex items-center gap-3 my-2 max-w-xs">

              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>

              <span className="text-[#db2777] text-xs">
                ✦
              </span>

              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>

            </div>

          </div>


          <p className="text-white/60 pl-15 pt-1 tracking-wider scale-x-110 text-base">
            Find something worth remembering.
          </p>


          {/* Search */}

          <div className="mt-7 flex w-full max-w-lg border border-white/20 bg-black/30">

            <input
              type="text"
              placeholder="Search events, artists, places..."
              className="flex-1 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-zinc-500"
            />

            <button className="px-6 bg-[#db2777] text-4xl text-black">
              →
            </button>

          </div>

        </div>

      </section>



      {/* ================= CATEGORY + FILTER SECTION ================= */}

      <div className="bg-zinc-950 pl-20 pt-3 pr-15 pb-5">

        {/* Categories */}

        <div className="flex flex-wrap justify-between items-center">

          {categories.map((e, index) => (

            <p
              key={index}
              onClick={() => setSelectedCategory(e.name)}
              className={`cursor-pointer transition duration-300 text-sm md:text-base
                ${
                  selectedCategory === e.name
                    ? "text-[#E07BA8]"
                    : "text-zinc-400 hover:text-[#E07BA8]"
                }
              `}
            >
              {e.name}
            </p>

          ))}

        </div>



        {/* ================= FILTERS ================= */}

        <div className="w-full flex flex-wrap gap-4 mt-6">


          {/* DATE DROPDOWN */}

          <div className="relative">

            <button
              onClick={() => {
                setShowDateDropdown(!showDateDropdown);
                setShowLocationDropdown(false);
              }}
              className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-zinc-900 text-sm text-white hover:border-[#E07BA8]/60 transition"
            >

              <span className="text-[#E07BA8]">
                ✦
              </span>

              <span>
                {selectedDate === "All Dates"
                  ? "Select Date"
                  : selectedDate}
              </span>

              <span className="text-zinc-500">
                ↓
              </span>

            </button>



            {/* Date Dropdown Menu */}

            {showDateDropdown && (

              <div className="absolute z-30 top-full left-0 mt-2 w-52 max-h-64 overflow-y-auto bg-zinc-900 border border-white/10 shadow-xl">

                {dateOptions.map((date, index) => (

                  <button
                    key={index}
                    onClick={() => {
                      setSelectedDate(date);
                      setShowDateDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition
                      ${
                        selectedDate === date
                          ? "text-[#E07BA8] bg-white/5"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >

                    {date}

                  </button>

                ))}

              </div>

            )}

          </div>



          {/* LOCATION DROPDOWN */}

          <div className="relative">

            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowDateDropdown(false);
              }}
              className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-zinc-900 text-sm text-white hover:border-[#E07BA8]/60 transition"
            >

              <span className="text-[#E07BA8]">
                ⌖
              </span>

              <span>
                {selectedLocation}
              </span>

              <span className="text-zinc-500">
                ↓
              </span>

            </button>



            {/* Location Dropdown Menu */}

            {showLocationDropdown && (

              <div className="absolute z-30 top-full left-0 mt-2 w-52 bg-zinc-900 border border-white/10 shadow-xl">

                {locations.map((location, index) => (

                  <button
                    key={index}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition
                      ${
                        selectedLocation === location
                          ? "text-[#E07BA8] bg-white/5"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >

                    {location}

                  </button>

                ))}

              </div>

            )}

          </div>



          {/* CLEAR FILTER */}

          {(selectedDate !== "All Dates" ||
            selectedLocation !== "All Locations") && (

            <button
              onClick={() => {
                setSelectedDate("All Dates");
                setSelectedLocation("All Locations");
              }}
              className="px-5 py-3 text-sm text-[#E07BA8] hover:text-white transition"
            >
              Clear Filters
            </button>

          )}

        </div>



        {/* Bottom Border */}

        <div className="w-full mt-5 border-b border-white/10"></div>

      </div>



      {/* ================= EVENTS SECTION ================= */}

      <section className="bg-[#09090B] text-white px-6 md:px-10 lg:px-16 py-16">

        <div className="max-w-7xl mx-auto">


          {/* Heading */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div>

              <h2 className="text-3xl md:text-4xl font-serif mt-2">

                {filteredEvents.length} Experiences

              </h2>

            </div>

          </div>



          {/* ================= EVENT LIST ================= */}

          <div>

            {filteredEvents.length > 0 ? (

              filteredEvents.map((event) => (

                <div
                  key={event.id}
                  className="
                    group
                    border-t border-white/10
                    py-8
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#E07BA8]/50
                  "
                >

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">



                    {/* EVENT TYPE */}

                    <div className="md:col-span-2 relative border-r border-white/20 pr-6">

                      <p className="text-[#E07BA8] text-center text-xs tracking-[0.25em] uppercase">
                        Experience
                      </p>

                      <p className="text-white/40 text-center text-sm mt-3">
                        {event.category}
                      </p>

                    </div>



                    {/* EVENT CONTENT */}

                    <div className="md:col-span-6 pl-16">

                      <p className="text-[#E07BA8] text-lg mb-2">
                        {event.category}
                      </p>


                      <h3 className="font-serif text-2xl text-[#FAF8F6] group-hover:text-[#E07BA8] transition">

                        {event.title}

                      </h3>



                      <div className="mt-3 text-sm text-zinc-500">


                        {/* Location */}

                        <span>
                          📍 {event.location}
                        </span>



                        {/* Time */}

                        <span className="flex items-center gap-2 mt-3">

                          <IoMdTime className="text-[#E07BA8]" />

                          {event.time}

                        </span>

                      </div>



                      {/* View Details */}

                      <p className="text-sm text-zinc-400 mt-4 group-hover:text-[#FAF8F6] transition">

                        <NavLink
                          to={`/view/${event.id}`}
                          className="hover:text-[#E07BA8] transition"
                        >
                          View Details →
                        </NavLink>

                      </p>

                    </div>



                    {/* EVENT IMAGE */}

                    <div className="md:col-span-4">

                      <div className="overflow-hidden rounded-xl">

                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              /* No Events */

              <div className="py-20 text-center border-t border-white/10">

                <p className="text-[#E07BA8] text-4xl font-serif">
                  No Experiences Found
                </p>

                <p className="text-zinc-500 mt-3">
                  Try changing your date, location or category.
                </p>

                <button
                  onClick={() => {
                    setSelectedCategory("All Events");
                    setSelectedDate("All Dates");
                    setSelectedLocation("All Locations");
                  }}
                  className="mt-6 px-6 py-3 border border-[#E07BA8]/40 text-[#E07BA8] hover:bg-[#E07BA8] hover:text-black transition"
                >
                  Clear All Filters
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </>
  );
}