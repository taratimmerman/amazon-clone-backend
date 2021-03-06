const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./users/usersRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', userRouter);

module.exports = server;