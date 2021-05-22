const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// REQUIRE ROUTES HERE

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// USE ROUTES HERE

module.exports = server;