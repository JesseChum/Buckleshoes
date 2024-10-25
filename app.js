// Require express framework
const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

function buckleConverter(number) {
  switch (number) {
    case 1:
      return "One, two, buckle my shoe!";
    case 2:
      return "Three, four, shut the door!";
    case 3:
      return "Five, six, pick up sticks!";
    case 4:
      return "Seven, eight, lay them straight!";
    case 5:
      return "Nine, ten, a big fat hen!";
    case 6:
      return "This is a nursery rhyme, again!";
    case 7:
      return "What a lovely time to rhyme!";
    case 8:
      return "Look at all the joy we make!";
    case 9:
      return "Singing rhymes, oh what a shake!";
    case 10:
      return "Ten is the end, but let's not pretend!";
    default:
      return "Please enter a number between 1 and 10.";
  }
}

// Define a default route for GET requests
app.get("/", (req, res) => {
  res.render("home", { message: null });
});

// Define a default route for POST requests
app.post("/", (req, res) => {
  const number = parseInt(req.body.number);
  let message = ""; // Initialize message variable

  if (isNaN(number) || number < 1 || number > 10) {
    message = "Please enter a number between 1 and 10.";
  } else {
    message = buckleConverter(number);
  }

  res.render("home", { message });
});

// Start the app
app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
