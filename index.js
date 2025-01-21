const express = require("express");
const app = express();

const store = {
  name: "Mystic Market",
  open: true,
  description: "A one-stop shop for adventurers seeking rare and magical provisions. From healing potions to enchanted spices, we've got everything you need to survive and thrive in your quest.",
  hours: {
    monday: "8:00 AM - 8:00 PM",
    tuesday: "8:00 AM - 8:00 PM",
    wednesday: "8:00 AM - 8:00 PM",
    thursday: "8:00 AM - 8:00 PM",
    friday: "8:00 AM - 10:00 PM",
    saturday: "10:00 AM - 10:00 PM",
    sunday: "10:00 AM - 6:00 PM"
  },
  image: "store.jpg",
  items: [
    {
      name: "Healing Potion",
      cost: 50,
      image: "https://example.com/images/healing-potion.jpg"
    },
    {
      name: "Mana Elixir",
      cost: 75,
      image: "https://example.com/images/mana-elixir.jpg"
    },
    {
      name: "Elven Bread",
      cost: 25,
      image: "https://example.com/images/elven-bread.jpg"
    },
    {
      name: "Phoenix Feather Spice",
      cost: 200,
      image: "https://example.com/images/phoenix-spice.jpg"
    }
  ]
};


// Set up your folders and move your files into the right place

// Set up static middleware


// Set the view engine to EJS


// Set up the router for / to send back home.ejs


// Set up the router for /menu to send back menu.ejs



app.listen();
