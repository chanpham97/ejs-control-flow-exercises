const express = require("express");
const app = express();

const store = {
  info: {
    name: "Mystic Market",
    open: true,
    description: "A one-stop shop for adventurers seeking rare and magical provisions. From healing potions to enchanted spices, we've got everything you need to survive and thrive in your quest.",
    hours: [
      { day: "Monday", hours: "8:00 AM - 8:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
      { day: "Friday", hours: "8:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 10:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    ],
    image: "store.jpg",
  },
  items: [
    {
      name: "Healing Potion",
      cost: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15HkNNlZmtldJJyY8ZyLt_6C2ljExDEfh1pwAwLcbgdLLOY8e-FOGn_huYW6kWAgOlP4&usqp=CAU"
    },
    {
      name: "Mana Elixir",
      cost: 75,
      image: "https://www.shutterstock.com/image-vector/pixel-art-potion-retro-8bit-260nw-2358757125.jpg"
    },
    {
      name: "Elven Bread",
      cost: 25,
      image: "https://www.shutterstock.com/image-vector/pixel-art-illustration-bread-pixelated-600nw-2467440875.jpg"
    },
    {
      name: "Phoenix Feather",
      cost: 200,
      image: "https://www.shutterstock.com/image-vector/pixel-art-feather-pen-icon-260nw-2367380105.jpg"
    }
  ]
};


// Set up your folders and move your files into the right place

// Set up static middleware


// Set the view engine to EJS


// Set up the router for / to send back home.ejs with the info attribute




// Set up the router for /menu to send back menu.ejs with the entire object (so that you can access the array)





app.listen(3000, ()=>{
  console.log("Server started")
});
