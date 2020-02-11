// Seeds file that creates all users and communities

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const communities = [
  {
    communityName: "Berlin | Girl Gone International",
    location: "Berlin, Germany",
    communityManagers:
      "Violet Dove,  Alicia Stolsmark, Tanya de Boer, Jardena Lande, Indah Hoskins, Laurel Wright",
    communitySize: 19526,
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIBerlin/",
    latitude: 52.52,
    longitude: 13.405
  },
  {
    communityName: "Hamburg | Girl Gone International",
    location: "Hamburg, Germany",
    communityManagers: "Maike Breternitz",
    communitySize: 6368,
    continent: "Europe",
    url: "https://www.facebook.com/groups/girlgoneinternationalhh/",
    latitude: 53.5511,
    longitude: 9.9937
  },
  {
    communityName: "Stockholm | Girl Gone International",
    location: "Stockholm, Sweden",
    communityManagers: "Samantha Govender, Pipsa Saarento",
    communitySize: 4326,
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIstockholm/",
    latitude: 59.3293,
    longitude: 18.0686
  },
  {
    communityName: "London | Girl Gone International ",
    location: "London, United Kingdom",
    communityManagers: "Jennifer Athanasiadis, Zoë Sofair",
    communitySize: 7139,
    continent: "Europe",
    url: "https://www.facebook.com/groups/LondonGGI/",
    latitude: 51.5074,
    longitude: 0.1278
  },
  {
    communityName: "Oslo | Girl Gone International",
    location: "Oslo, Norway",
    communityManagers: "Kata Bencze, Valerie Robertson, Suzanne van Gils",
    communitySize: 385,
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIOSLO/",
    latitude: 59.9139,
    longitude: 10.7522
  },
  {
    communityName: "Mallorca | Girl Gone International",
    location: "Mallorca, Spain",
    communityManagers: "Adèle Chrétien, Aleksandra Pilch",
    communitySize: 4354,
    continent: "Europe",
    url: "https://www.facebook.com/groups/mallorcaggi/",
    latitude: 39.6953,
    longitude: 3.0176
  },
  {
    communityName: "Chicago | Girl Gone International ",
    location: "Chicago, Illinois (USA)",
    communityManagers: "Lynn Sikora, Dijana Savić",
    communitySize: 256,
    continent: "North America",
    url: "https://www.facebook.com/groups/ChicagoGGI/",
    latitude: 41.8781,
    longitude: 87.6298
  },
  {
    communityName: "San Francisco | Girl Gone International",
    location: "San Francisco, California (USA)",
    communityManagers: "Bianca Encinas, Ariana Rizzato",
    communitySize: 1092,
    continent: "North America",
    url: "https://www.facebook.com/groups/ggisanfran/",
    latitude: 37.7749,
    longitude: 122.4194
  },
  {
    communityName: "Toronto | Girl Gone International",
    location: "Toronto, Ontario (Canada)",
    communityManagers: "Victoria Procunier",
    communitySize: 738,
    continent: "North America",
    url: "https://www.facebook.com/groups/GGIToronto/",
    latitude: 43.6532,
    longitude: 79.3832
  },
  {
    communityName: "Los Angeles | Girl Gone International",
    location: "Los Angeles, California (USA)",
    communityManagers: "Lina Lie",
    communitySize: 988,
    continent: "North America",
    url: "https://www.facebook.com/groups/GGILA/",
    latitude: 34.0522,
    longitude: 118.2437
  },
  {
    communityName: "Mexico City | Girl Gone International",
    location: "Mexico City, Mexico",
    communityManagers: "Anne Scott",
    communitySize: 529,
    continent: "North America",
    url: "https://www.facebook.com/groups/MexicoGGI/",
    latitude: 23.6345,
    longitude: 102.5528
  },
  {
    communityName: "Washington, DC | Girl Gone International",
    location: "Washington, DC (USA)",
    communityManagers: "Alexa Grellet, Jennifer Howell",
    communitySize: 329,
    continent: "North America",
    url: "https://www.facebook.com/groups/GGIWashington/",
    latitude: 47.7511,
    longitude: 120.7401
  },
  {
    communityName: "Hong Kong | Girl Gone International",
    location: "Hong Kong",
    communityManagers: "Tanya Sautina, Gemma Cauchi, Linda Fong",
    communitySize: 3130,
    continent: "Asia",
    url: "https://www.facebook.com/groups/GGIHongKong/",
    latitude: 22.3193,
    longitude: 114.1694
  },
  {
    communityName: "Canggu & Seminyak | Girl Gone International",
    location: "Bali, Indonesia ",
    communityManagers: "Nona Baradja, Stephanie King",
    communitySize: 391,
    continent: "Asia",
    url: "https://www.facebook.com/groups/BaliGGI/",
    latitude: 8.3405,
    longitude: 115.092
  },
  {
    communityName: "Kuala Lumpur | Girl Gone International",
    location: "Kuala Lumpur, Malaysia",
    communityManagers: "Au Leng Wai",
    communitySize: 373,
    continent: "Asia",
    url: "https://www.facebook.com/groups/KualaLumpurGGI/",
    latitude: 3.139,
    longitude: 101.6869
  },
  {
    communityName: "Mumbai | Girl Gone International",
    location: "Mumbai, India ",
    communityManagers: "Sai Waikar",
    communitySize: 44,
    continent: "Asia",
    url: "https://www.facebook.com/groups/mumbaiggi/",
    latitude: 19.076,
    longitude: 72.8777
  },
  {
    communityName: "Singapore | Girl Gone International",
    location: "Singapore",
    communityManagers: "Veronica May, Michelle Ibarra, \nCora Sauer",
    communitySize: 1508,
    continent: "Asia",
    url: "https://www.facebook.com/groups/GGISingapore/",
    latitude: 1.3521,
    longitude: 103.8198
  },
  {
    communityName: "Abu Dhabi | Girl Gone International",
    location: "Abu Dhabi, United Arab Emirates",
    communityManagers: "Tina Jones",
    communitySize: 1173,
    continent: "Asia",
    url: "https://www.facebook.com/groups/ggiabudhabi/",
    latitude: 24.4539,
    longitude: 54.3773
  },
  {
    communityName: "Sydney | Girl Gone International",
    location: "Sydney, NSW, Australia",
    communityManagers: "Tanti Mazda",
    communitySize: 1956,
    continent: "Australia",
    url: "https://www.facebook.com/groups/sydneyggi/",
    latitude: 33.8688,
    longitude: 151.2093
  },
  {
    communityName: "Melbourne | Girl Gone International",
    location: "Melbourne, Victoria, Australia",
    communityManagers: "Madina Almat",
    communitySize: 1727,
    continent: "Australia",
    url: "https://www.facebook.com/groups/melbourneggi/",
    latitude: 37.8136,
    longitude: 144.9631
  },
  {
    communityName: "Nairobi | Girl Gone International",
    location: "Nairobi, Kenya",
    communityManagers: "Janine Brophy",
    communitySize: 221,
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGINairobi",
    latitude: 1.2921,
    longitude: 36.8219
  },
  {
    communityName: "Johannesburg | Girl Gone International",
    location: "Johannesburg, South Africa",
    communityManagers: "Deshni Govender",
    communitySize: 189,
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGIJohannesurg/",
    latitude: 26.2041,
    longitude: 28.0473
  },
  {
    communityName: "Addis Ababa | Girl Gone International",
    location: "Addis Ababa, Ethiopia",
    communityManagers: "Rani Wako",
    communitySize: 207,
    continent: "Africa",
    url: "https://www.facebook.com/groups/797596360676982",
    latitude: 8.9806,
    longitude: 38.7578
  },
  {
    communityName: "Lagos | Girl Gone International",
    location: "Lagos, Nigeria",
    communityManagers: "Sina Pape ",
    communitySize: 193,
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGILagos/",
    latitude: 6.5244,
    longitude: 3.3792
  },
  {
    communityName: "Lima | Girl Gone International",
    location: "Lima, Peru",
    communityManagers: "Giannina Magdlener",
    communitySize: 111,
    continent: "South America",
    url: "https://www.facebook.com/groups/LimaGGI/",
    latitude: 12.0464,
    longitude: 77.0428
  },
  {
    communityName: "Bogotá | Girl Gone International",
    location: "Bogotá, Colombia",
    communityManagers: "Maritza Gabriela McCully ",
    communitySize: 393,
    continent: "South America",
    url: "https://www.facebook.com/groups/BogotaGGI"
  },
  {
    communityName: "Pereira | Girl Gone Internatonal",
    location: "Pereira, Colombia",
    communityManagers: "Mary Carper",
    communitySize: 51,
    continent: "South America",
    url: "https://www.facebook.com/groups/PereiraCoGGI"
  },
  {
    communityName: "São Paulo | Girl Gone International",
    location: "São Paulo, Brazil",
    communityManagers: "Viviane Riegel",
    communitySize: 284,
    continent: "South America",
    url: "https://www.facebook.com/groups/GGISP/"
  },
  {
    communityName: "Tallinn | Girl Gone International",
    location: "Tallinn, Estonia",
    communityManagers: "Marii Val",
    communitySize: 378,
    continent: "Europe",
    url: "https://www.facebook.com/groups/TallinnGGI"
  },
  {
    communityName: "Zagreb | Girl Gone International",
    location: "Zagreb, Croatia",
    communityManagers: "Ivana Custic",
    communitySize: 165,
    continent: "Europe",
    url: "https://www.facebook.com/groups/ZagrebGGI"
  }
];

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//const User = require("../models/User");
const Community = require("../models/Community");

const bcryptSalt = 10;

mongoose
  .connect("mongodb://localhost:27017/girl-gone-international", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

//User.collection.drop();
Community.collection.drop();

Community.create(communities)
  .then(result => {
    console.log(`Created ${result.length} communities`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
