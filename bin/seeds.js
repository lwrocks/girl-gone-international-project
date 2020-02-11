// Seeds file that creates all users and communities

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const communities = [
  {
    communityName: "Berlin | Girl Gone International",
    location: "Berlin, Germany",
    communityManagers: [
      "Violet Dove",
      "Alicia Stolsmark",
      "Tanya de Boer",
      "Jardena Lande",
      "Indah Hoskins",
      "Laurel Wright"
    ],
    communitySize: 19526,
    cityImage: "https://i.imgur.com/V7qglqT.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIBerlin/",
    coordinates: [52.52, 13.405]
  },

  {
    communityName: "Hamburg | Girl Gone International",
    location: "Hamburg, Germany",
    communityManagers: ["Maike Breternitz"],
    communitySize: 6368,
    cityImage: "https://i.imgur.com/U3XTmbV.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/girlgoneinternationalhh/",
    coordinates: [53.5511, 9.9937]
  },

  {
    communityName: "Stockholm | Girl Gone International",
    location: "Stockholm, Sweden",
    communityManagers: ["Samantha Govender", "Pipsa Saarento"],
    communitySize: 4326,
    cityImage: "https://i.imgur.com/fO9fc0b.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIstockholm/",
    coordinates: [59.3293, 18.0686]
  },

  {
    communityName: "London | Girl Gone International ",
    location: "London, United Kingdom",
    communityManagers: ["Jennifer Athanasiadis", "Zoë Sofair"],
    communitySize: 7139,
    cityImage: "https://i.imgur.com/AodpEC1.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/LondonGGI/",
    coordinates: [51.5074, -0.1278]
  },

  {
    communityName: "Oslo | Girl Gone International",
    location: "Oslo, Norway",
    communityManagers: ["Kata Bencze", "Valerie Robertson", "Suzanne van Gils"],
    communitySize: 385,
    cityImage: "https://i.imgur.com/RQgdJBz.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/GGIOSLO/",
    coordinates: [59.9139, 10.7522]
  },

  {
    communityName: "Mallorca | Girl Gone International",
    location: "Mallorca, Spain",
    communityManagers: ["Adèle Chrétien", "Aleksandra Pilch"],
    communitySize: 4354,
    cityImage: "https://i.imgur.com/uqC3sOQ.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/mallorcaggi/",
    coordinates: [39.6953, 3.0176]
  },

  {
    communityName: "Chicago | Girl Gone International ",
    location: "Chicago, Illinois (USA)",
    communityManagers: ["Lynn Sikora", "Dijana Savić"],
    communitySize: 256,
    cityImage: "https://i.imgur.com/2c2yy31.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/ChicagoGGI/",
    coordinates: [41.8781, -87.6298]
  },

  {
    communityName: "San Francisco | Girl Gone International",
    location: "San Francisco, California (USA)",
    communityManagers: ["Bianca Encinas", "Ariana Rizzato"],
    communitySize: 1092,
    cityImage: "https://i.imgur.com/xVHD9OC.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/ggisanfran/",
    coordinates: [37.7749, -122.4194]
  },

  {
    communityName: "Toronto | Girl Gone International",
    location: "Toronto, Ontario (Canada)",
    communityManagers: ["Victoria Procunier"],
    communitySize: 738,
    cityImage: "https://i.imgur.com/63TMlvz.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/GGIToronto/",
    coordinates: [43.6532, -79.3832]
  },

  {
    communityName: "Los Angeles | Girl Gone International",
    location: "Los Angeles, California (USA)",
    communityManagers: ["Lina Lie"],
    communitySize: 988,
    cityImage: "https://i.imgur.com/CtS66Rn.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/GGILA/",
    coordinates: [34.0522, -118.2437]
  },

  {
    communityName: "Mexico City | Girl Gone International",
    location: "Mexico City, Mexico",
    communityManagers: ["Anne Scott"],
    communitySize: 529,
    cityImage: "https://i.imgur.com/ZA5yvcz.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/MexicoGGI/",
    coordinates: [23.6345, -102.5528]
  },

  {
    communityName: "Washington, DC | Girl Gone International",
    location: "Washington, DC (USA)",
    communityManagers: ["Alexa Grellet", "Jennifer Howell"],
    communitySize: 329,
    cityImage: "https://i.imgur.com/d9NoN24.jpg",
    continent: "North America",
    url: "https://www.facebook.com/groups/GGIWashington/",
    coordinates: [47.7511, -120.7401]
  },

  {
    communityName: "Hong Kong | Girl Gone International",
    location: "Hong Kong",
    communityManagers: ["Tanya Sautina", "Gemma Cauchi", "Linda Fong"],
    communitySize: 3130,
    cityImage: "https://i.imgur.com/v8AKoJQ.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/GGIHongKong/",
    coordinates: [22.3193, 114.1694]
  },

  {
    communityName: "Canggu & Seminyak | Girl Gone International",
    location: "Bali, Indonesia ",
    communityManagers: ["Nona Baradja", "Stephanie King"],
    communitySize: 391,
    cityImage: "https://i.imgur.com/zrCub2v.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/BaliGGI/",
    coordinates: [-8.3405, 115.092]
  },

  {
    communityName: "Kuala Lumpur | Girl Gone International",
    location: "Kuala Lumpur, Malaysia",
    communityManagers: ["Au Leng Wai"],
    communitySize: 373,
    cityImage: "https://i.imgur.com/c5hlmR2.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/KualaLumpurGGI/",
    coordinates: [3.139, 101.6869]
  },

  {
    communityName: "Mumbai | Girl Gone International",
    location: "Mumbai, India ",
    communityManagers: ["Sai Waikar"],
    communitySize: 44,
    cityImage: "https://i.imgur.com/6EwdveG.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/mumbaiggi/",
    coordinates: [19.076, 72.8777]
  },

  {
    communityName: "Singapore | Girl Gone International",
    location: "Singapore",
    communityManagers: ["Veronica May", "Michelle Ibarra", "Cora Sauer"],
    communitySize: 1508,
    cityImage: "https://i.imgur.com/KdgemiK.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/GGISingapore/",
    coordinates: [1.3521, 103.8198]
  },

  {
    communityName: "Abu Dhabi | Girl Gone International",
    location: "Abu Dhabi, United Arab Emirates",
    communityManagers: ["Tina Jones"],
    communitySize: 1173,
    cityImage: "https://i.imgur.com/jTKEWNr.jpg",
    continent: "Asia",
    url: "https://www.facebook.com/groups/ggiabudhabi/",
    coordinates: [24.4539, 54.3773]
  },

  {
    communityName: "Sydney | Girl Gone International",
    location: "Sydney, NSW, Australia",
    communityManagers: ["Tanti Mazda"],
    communitySize: 1956,
    cityImage: "https://i.imgur.com/1IyFQUJ.jpg",
    continent: "Australia",
    url: "https://www.facebook.com/groups/sydneyggi/",
    coordinates: [-33.8688, 151.2093]
  },

  {
    communityName: "Melbourne | Girl Gone International",
    location: "Melbourne, Victoria, Australia",
    communityManagers: ["Madina Almat"],
    communitySize: 1727,
    cityImage: "https://i.imgur.com/2U36yiS.jpg",
    continent: "Australia",
    url: "https://www.facebook.com/groups/melbourneggi/",
    coordinates: [37.8136, 144.9631]
  },

  {
    communityName: "Nairobi | Girl Gone International",
    location: "Nairobi, Kenya",
    communityManagers: ["Janine Brophy"],
    communitySize: 221,
    cityImage: "https://i.imgur.com/Ayn7jwo.jpg",
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGINairobi",
    coordinates: [1.2921, 36.8219]
  },

  {
    communityName: "Johannesburg | Girl Gone International",
    location: "Johannesburg, South Africa",
    communityManagers: ["Deshni Govender"],
    communitySize: 189,
    cityImage: "https://i.imgur.com/FWi2lO6.jpg",
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGIJohannesurg/",
    coordinates: [26.2041, 28.0473]
  },

  {
    communityName: "Addis Ababa | Girl Gone International",
    location: "Addis Ababa, Ethiopia",
    communityManagers: ["Rani Wako"],
    communitySize: 207,
    cityImage: "https://i.imgur.com/oG1f1ZK.jpg",
    continent: "Africa",
    url: "https://www.facebook.com/groups/797596360676982",
    coordinates: [8.9806, 38.7578]
  },

  {
    communityName: "Lagos | Girl Gone International",
    location: "Lagos, Nigeria",
    communityManagers: ["Sina Pape"],
    communitySize: 193,
    cityImage: "https://i.imgur.com/UIlzzuD.jpg",
    continent: "Africa",
    url: "https://www.facebook.com/groups/GGILagos/",
    coordinates: [6.5244, 3.3792]
  },

  {
    communityName: "Lima | Girl Gone International",
    location: "Lima, Peru",
    communityManagers: ["Giannina Magdlener"],
    communitySize: 111,
    cityImage: "https://i.imgur.com/yU0c7YF.jpg",
    continent: "South America",
    url: "https://www.facebook.com/groups/LimaGGI/",
    coordinates: [12.0464, 77.0428]
  },

  {
    communityName: "Bogotá | Girl Gone International",
    location: "Bogotá, Colombia",
    communityManagers: ["Maritza Gabriela McCully", "Natalie Assaad"],
    communitySize: 393,
    cityImage: "https://i.imgur.com/kFzGYC5.jpg",
    continent: "South America",
    url: "https://www.facebook.com/groups/BogotaGGI",
    coordinates: [4.711, 74.0721]
  },

  {
    communityName: "Pereira | Girl Gone Internatonal",
    location: "Pereira, Colombia",
    communityManagers: ["Mary Carper"],
    communitySize: 51,
    cityImage: "https://i.imgur.com/3R0pwGr.jpg",
    continent: "South America",
    url: "https://www.facebook.com/groups/PereiraCoGGI",
    coordinates: [4.8087, 75.6906]
  },

  {
    communityName: "São Paulo | Girl Gone International",
    location: "São Paulo, Brazil",
    communityManagers: ["Viviane Riegel"],
    communitySize: 284,
    cityImage: "https://i.imgur.com/xH2qspo.png",
    continent: "South America",
    url: "https://www.facebook.com/groups/GGISP/",
    coordinates: [23.5505, 46.6333]
  },

  {
    communityName: "Tallinn | Girl Gone International",
    location: "Tallinn, Estonia",
    communityManagers: ["Marii Val"],
    communitySize: 378,
    cityImage: "https://i.imgur.com/8rZry5I.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/TallinnGGI",
    coordinates: [59.437, 24.7536]
  },

  {
    communityName: "Zagreb | Girl Gone International",
    location: "Zagreb, Croatia",
    communityManagers: ["Ivana Custic"],
    communitySize: 165,
    cityImage: "https://i.imgur.com/fufuhVM.jpg",
    continent: "Europe",
    url: "https://www.facebook.com/groups/ZagrebGGI",
    coordinates: [45.815, 15.9819]
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
