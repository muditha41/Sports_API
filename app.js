const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const tournamentRoute = require("./routes/tournaments");
const teamRoute = require("./routes/teams");
const playerRoute = require("./routes/players");
const matchRoute = require("./routes/matches");
const teamCardsRoute = require("./routes/teamCards");
const imageRoute = require("./routes/images");

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/",userRoute);
app.use("/posts",postsRoute);
app.use("/tournaments",tournamentRoute);
app.use("/teams",teamRoute);
app.use("/players",playerRoute);
app.use("/matches",matchRoute);
app.use("/team-cards",teamCardsRoute);
app.use("/images",imageRoute);

module.exports = app;