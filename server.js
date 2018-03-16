const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;

// const api = require("./server/routes/api");
// app.use(api, "/api")

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.join(__dirname, "/dist")));

// Angular path location strategy
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html")); 
})
// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     // useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
