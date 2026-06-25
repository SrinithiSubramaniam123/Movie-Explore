const artists = [
  // ===== TAMIL =====
  {
    id: 1,
    name: "Anirudh Ravichander",
    language: "Tamil",
    type: "Music Director",
    popularity: 9.4,
    debutYear: 2011,
    awards: 3,
    bio: "Known for high-energy mass anthems and youthful melodies, Anirudh redefined Tamil film music with his EDM-folk fusion sound.",
    songs: ["Arabic Kuthu", "Naa Ready", "Hukum", "Why This Kolaveri Di", "Rowdy Baby"],
    movies: ["Beast", "Leo", "Jailer", "3", "Maari"]
  },
  {
    id: 2,
    name: "Yuvan Shankar Raja",
    language: "Tamil",
    type: "Music Director",
    popularity: 9.0,
    debutYear: 1996,
    awards: 4,
    bio: "Son of legendary composer Ilaiyaraaja, Yuvan is celebrated for blending youthful melody with experimental background scores.",
    songs: ["Pala Pala", "Mannipaaya", "Engeyum Eppadiyum", "Twinkle Star", "Po Nee Po"],
    movies: ["Vaaranam Aayiram", "Pudhupettai", "Billa", "Aaytha Ezhuthu", "Mersal"]
  },
  {
    id: 3,
    name: "Ilaiyaraaja",
    language: "Tamil",
    type: "Music Director",
    popularity: 9.7,
    debutYear: 1976,
    awards: 5,
    bio: "Often called the 'Isaignani' (musical sage), he revolutionised South Indian film music by fusing Western orchestration with Carnatic and folk roots.",
    songs: ["Sentamizh Nadenum", "Nilave Vaa", "Mannil Indha Kadhal", "Raja Raja Chozhan", "Putham Pudhu Kalai"],
    movies: ["Mouna Ragam", "Nayagan", "Thalapathi", "Hey Ram", "Sigappu Rojakkal"]
  },
  {
    id: 4,
    name: "Sid Sriram",
    language: "Tamil / Telugu",
    type: "Singer",
    popularity: 9.3,
    debutYear: 2012,
    awards: 3,
    bio: "A Carnatic-trained R&B artist who brings soulful, genre-blending vocals to South Indian cinema and his own independent music.",
    songs: ["Adiye", "Ennodu Nee Irundhaal", "Inkem Inkem", "Kannaana Kanney", "Samajavaragamana"],
    movies: ["I", "Pushpa: The Rise", "Geetha Govindam", "Viswasam", "Vaanam Kottatum"]
  },
  {
    id: 5,
    name: "D. Imman",
    language: "Tamil",
    type: "Music Director",
    popularity: 8.6,
    debutYear: 2003,
    awards: 2,
    bio: "Known for soulful melodies and rural-rooted folk compositions, with a strong following for his rustic, earthy soundtracks.",
    songs: ["Mersalaayitten", "Otha Sollaale", "Kummi Adi", "Vaa Vaathi", "Mannar Maaligaiyo"],
    movies: ["Kumki", "Viswasam", "Kotigobba 2", "Raja Rani", "Mappillai"]
  },

  // ===== TELUGU =====
  {
    id: 6,
    name: "Devi Sri Prasad",
    language: "Telugu",
    type: "Music Director",
    popularity: 9.2,
    debutYear: 1999,
    awards: 3,
    bio: "Popularly known as DSP, he's a chart-topping Telugu composer famous for catchy mass beats and high-octane dance numbers.",
    songs: ["Butta Bomma", "Jigelu Rani", "Saami Saami", "Vachindi Vachindi", "Oo Antava"],
    movies: ["Ala Vaikunthapurramuloo", "Rangasthalam", "Pushpa: The Rise", "Gabbar Singh", "Julayi"]
  },
  {
    id: 7,
    name: "S. Thaman",
    language: "Telugu",
    type: "Music Director",
    popularity: 9.1,
    debutYear: 2008,
    awards: 3,
    bio: "Known for his thumping background scores and chart-busting singles, Thaman is one of Tollywood's most in-demand composers.",
    songs: ["Pakka Local", "Aa Gaani Tana", "Ramuloo Ramulaa", "Jai Balayya", "Penny", ],
    movies: ["Krack", "Sarileru Neekevvaru", "Ala Vaikunthapurramuloo", "Sye Raa", "Eeswaran"]
  },
  {
    id: 8,
    name: "M. M. Keeravani",
    language: "Telugu",
    type: "Composer",
    popularity: 9.5,
    debutYear: 1987,
    awards: 5,
    bio: "An Academy Award winner (as M.M. Keeravani for 'Naatu Naatu'), celebrated for grand orchestral scores across Telugu cinema.",
    songs: ["Naatu Naatu", "Annamayya Title Song", "O Priya Priya", "Yeduta Nuvunte", "Pillagaali"],
    movies: ["RRR", "Annamayya", "Magadheera", "Baahubali", "Manam"]
  },
  {
    id: 9,
    name: "S. P. Balasubrahmanyam",
    language: "Telugu",
    type: "Singer",
    popularity: 9.6,
    debutYear: 1966,
    awards: 6,
    bio: "One of the most prolific playback singers in film history, with tens of thousands of songs recorded across multiple Indian languages.",
    songs: ["Premikula Roju Title Track", "Yeh Mausam Ka Jaadu Hai", "Telusa Manasa", "Priyathama Neevachata", "Chinukulu Padunaayi"],
    movies: ["Maine Pyar Kiya", "Sagara Sangamam", "Geethanjali", "Premikudu", "Swati Mutyam"]
  },

  // ===== KANNADA =====
  {
    id: 10,
    name: "Arjun Janya",
    language: "Kannada",
    type: "Music Director",
    popularity: 8.5,
    debutYear: 2006,
    awards: 2,
    bio: "A leading contemporary Kannada film composer known for energetic mass numbers and romantic melodies.",
    songs: ["Style Star", "Krishna Talkies Title Track", "Belageddu", "Aatagara Title Track", "Aakasha Bandhu"],
    movies: ["Style King", "Krishna Talkies", "Belageddu", "Aatagara", "Aakasha Bandhu"]
  },
  {
    id: 11,
    name: "Vijay Prakash",
    language: "Kannada",
    type: "Singer",
    popularity: 8.7,
    debutYear: 2002,
    awards: 2,
    bio: "A versatile playback singer who has lent his voice across Kannada, Tamil, Telugu and Hindi cinema, known for soulful melodies.",
    songs: ["Mast Kalandar", "Ninnindale", "Manasa", "Bombat Car", "Pyar Pyar"],
    movies: ["Eega", "Lucia", "Mungaru Male 2", "RangiTaranga", "KGF"]
  },

  // ===== MALAYALAM =====
  {
    id: 12,
    name: "M. Jayachandran",
    language: "Malayalam",
    type: "Music Director",
    popularity: 8.8,
    debutYear: 1996,
    awards: 4,
    bio: "Renowned for melodious, classically-rooted compositions that have become staples of modern Malayalam soundtracks.",
    songs: ["Aaro Nee Aaro", "Aaromale", "Aaranyakam", "Aaradho Pournami", "Karutha Penne"],
    movies: ["Vinodayathra", "Four Friends", "Sufiyum Sujatayum", "Bhramaram", "Salt N' Pepper"]
  },
  {
    id: 13,
    name: "K. J. Yesudas",
    language: "Malayalam",
    type: "Singer",
    popularity: 9.4,
    debutYear: 1961,
    awards: 8,
    bio: "A legendary playback singer with a six-decade career and thousands of devotional and film songs across Indian languages.",
    songs: ["Aathmaarppanam", "Sagara Sangeetham", "Manjal Prasadavum", "Olympian Anthem", "Kanninerikal"],
    movies: ["Chemmeen", "Sagara Sangeetham", "Bhargavi Nilayam", "Thoovanathumbikal", "His Highness Abdullah"]
  },

  // ===== HINDI =====
  {
    id: 14,
    name: "A. R. Rahman",
    language: "Tamil / Hindi",
    type: "Composer",
    popularity: 9.8,
    debutYear: 1992,
    awards: 6,
    bio: "A two-time Academy Award winner, Rahman transformed Indian film music with global fusion sounds and orchestral depth.",
    songs: ["Jai Ho", "Mukala Mukabla", "Khwaja Mere Khwaja", "Roja Jaaneman", "Tere Bina"],
    movies: ["Slumdog Millionaire", "Roja", "Jodhaa Akbar", "Guru", "Rockstar"]
  },
  {
    id: 15,
    name: "Arijit Singh",
    language: "Hindi",
    type: "Singer",
    popularity: 9.7,
    debutYear: 2011,
    awards: 5,
    bio: "India's most-streamed playback singer, known for his emotive, romantic ballads across Bollywood blockbusters.",
    songs: ["Tum Hi Ho", "Kesariya", "Channa Mereya", "Raabta", "Ae Dil Hai Mushkil"],
    movies: ["Aashiqui 2", "Brahmastra", "Ae Dil Hai Mushkil", "Agent Vinod", "Ae Dil Hai Mushkil"]
  },
  {
    id: 16,
    name: "Shreya Ghoshal",
    language: "Hindi",
    type: "Singer",
    popularity: 9.5,
    debutYear: 2000,
    awards: 5,
    bio: "A National Award-winning playback singer celebrated for her classical training and effortless range across genres.",
    songs: ["Teri Ore", "Sun Raha Hai Na Tu", "Deewani Mastani", "Bairi Piya", "Tumhi Dekho Naa"],
    movies: ["Singh Is Kinng", "Aashiqui 2", "Bajirao Mastani", "Devdas", "Kabhi Alvida Naa Kehna"]
  },

  // ===== KOREAN =====
  {
    id: 17,
    name: "BTS",
    language: "Korean",
    type: "Band",
    popularity: 9.9,
    debutYear: 2013,
    awards: 6,
    bio: "A seven-member global phenomenon credited with bringing K-pop to mainstream Western charts and stadiums worldwide.",
    songs: ["Dynamite", "Butter", "Permission to Dance", "Boy With Luv", "Spring Day"],
    movies: ["Bring the Soul", "Break the Silence", "BTS: Yet to Come"]
  },
  {
    id: 18,
    name: "Blackpink",
    language: "Korean",
    type: "Band",
    popularity: 9.6,
    debutYear: 2016,
    awards: 4,
    bio: "A four-member girl group known for powerful choreography and genre-bending pop, among the best-selling girl groups globally.",
    songs: ["How You Like That", "Pink Venom", "Shut Down", "Kill This Love", "DDU-DU DDU-DU"],
    movies: ["Light Up the Sky", "Blackpink: The Movie"]
  },

  // ===== JAPANESE =====
  {
    id: 19,
    name: "Radwimps",
    language: "Japanese",
    type: "Band",
    popularity: 8.8,
    debutYear: 2001,
    awards: 2,
    bio: "A Japanese rock band best known for scoring acclaimed anime films, blending intricate lyricism with cinematic soundscapes.",
    songs: ["Sparkle", "Zenzenzense", "Nandemonaiya", "Grand Escape", "Date"],
    movies: ["Your Name", "Weathering With You", "Suzume"]
  },

  // ===== GLOBAL / WESTERN =====
  {
    id: 20,
    name: "Taylor Swift",
    language: "English",
    type: "Singer",
    popularity: 9.8,
    debutYear: 2006,
    awards: 6,
    bio: "A genre-spanning global superstar and prolific songwriter, holding numerous chart and award records across pop and country.",
    songs: ["Cruel Summer", "Anti-Hero", "Love Story", "Shake It Off", "Blank Space"],
    movies: ["The Eras Tour", "Miss Americana"]
  },
  {
    id: 21,
    name: "Ed Sheeran",
    language: "English",
    type: "Singer",
    popularity: 9.5,
    debutYear: 2011,
    awards: 4,
    bio: "A British singer-songwriter known for acoustic-driven pop hits and looping live performances.",
    songs: ["Shape Of You", "Perfect", "Photograph", "Thinking Out Loud", "Bad Habits"],
    movies: ["Songwriter", "Ed Sheeran: Jumpers for Goalposts"]
  },
  {
    id: 22,
    name: "Rihanna",
    language: "English",
    type: "Singer",
    popularity: 9.4,
    debutYear: 2005,
    awards: 5,
    bio: "A Barbadian-American icon with a sound spanning pop, R&B, and dancehall, also celebrated as a businesswoman and performer.",
    songs: ["Umbrella", "Diamonds", "Work", "We Found Love", "Stay"],
    movies: ["Home", "Ocean's 8", "Battleship"]
  },
  {
    id: 23,
    name: "Bruno Mars",
    language: "English",
    type: "Singer",
    popularity: 9.3,
    debutYear: 2010,
    awards: 4,
    bio: "Known for his retro-funk showmanship and chart-topping collaborations, blending soul, pop, and R&B effortlessly.",
    songs: ["Uptown Funk", "24K Magic", "Just The Way You Are", "Locked Out of Heaven", "Die With A Smile"],
    movies: ["Bruno Mars: 24K Magic Live at the Apollo"]
  },
  {
    id: 24,
    name: "Eminem",
    language: "English",
    type: "Singer",
    popularity: 9.2,
    debutYear: 1996,
    awards: 4,
    bio: "One of the best-selling hip-hop artists of all time, renowned for intricate wordplay and raw, autobiographical storytelling.",
    songs: ["Lose Yourself", "Stan", "Not Afraid", "Love The Way You Lie", "Without Me"],
    movies: ["8 Mile"]
  }
];

export default artists;
