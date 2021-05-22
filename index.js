require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT;

server.get("/", (req, res) => {
    res.json({ message: "Welcome to Tara's Amazon clone server" });
  });

server.listen(port, () => {
    console.log(`\n** Listening on port ${port} **\n`);
  });