const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define an array of names
const names = ["John", "Bob", "Charlie", "David", "Eva", "Mahmoud", "Oussama", "Ali"];

// Route to get a random name
app.get("/random-name", (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.json({ name: randomName });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
