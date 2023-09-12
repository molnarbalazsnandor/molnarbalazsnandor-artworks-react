const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/api", async (req, res) => {
  const { query } = req;
  const { title, size, page, apikey } = query;
  const apiUrl = `https://api.harvardartmuseums.org/object?title=${title}&size=${size}&page=${page}&apikey=${apikey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server listening on port 8080.");
});
