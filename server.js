// CREATING THE HTTP SERVER

// FIRST REQUIRE EXPRESS

const express = require("express");

// INFORMING THE EXPRESS SRVER TO USE THE VARIABLE OF THE .env FILE THAT WE CREATED
const dotenv = require("dotenv");

// REQUIRING THE MORGAN MODULE
const morgan = require("morgan");

// REQUIRING THE BODY-PARSER MODULE
const bodyparser = require("body-parser");

// REQUIRING PATH
const path = require("path");

const app = express();

// CALLING THE CONFIG METHOD, AND INSIDE, WE WILL SPECIFY THE PATH OF THE CONFIG FILE SON THAT WE CAN USE THE PORT VARIABLE
dotenv.config({ path: "config.env" });

// STORING ALL OUR PRIVATE DETAILS IN THE .env FILE AND IF THE VARIABLE OF THIS .env FILE IS NOT AVAILABLE, THEN WE WILL  PARSE THE DEFAULT VALUE 8080, AND SO INSTEAD OF THE HARD CODED 3000 PORT VALUE, WE PARSE IN "PORT"
// NOTE THAT THIS IS BASICALLY CHANGING OUR PORT FROM 3000 T0 8080, SO WE CAN BASICALLY CHANGE OUR PORT TO WHATEVER WE WANT
const PORT = process.env.PORT || 8080;

// LOG REQUEST, AS YOU KNOW MORGAN MODULE ALLOWS US TO LOG REQUESTS ON THE CONSOLE ANYWHERE WE MAKE A REQUEST
app.use(morgan("tiny"));

// PARSE REQURST TO BODY-PARSER
app.use(bodyparser.urlencoded({ extended: true }));

// SETTING THE VIEW ENGINE: SO IN THIS PROJECT WE ARE USING EMBEDED JAVASCRIPT, "ejs"
app.set("view engine", "ejs");

// LOADING OUR assets FOLDER USING THE app.use() METHOD
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// CREATING A DEFAULT ROUTE/ROOT ROUTE
app.get("/", (req, res) => {
  res.render("index");
});

// LISTENING TO THE APP ON PORT 3000
app.listen(PORT, () => {
  console.log("ENGINE STARTED SUCCESSFULLY!!, ENJOY THE FLIGHT!!");
});
