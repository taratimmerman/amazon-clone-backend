require('dotenv').config();

const users = [
  {
    email: 'adam_admin@gmail.com',
    name: 'Adam',
    password: 'admin123',
    role: 'administrator',
    city: 'Salt Lake City'
  },
  {
    email: 'victor_visitor@gmail.com',
    name: 'Victor',
    password: 'visitor123',
    role: 'visitor',
    city: 'West Valley City'
  }
];

exports.seed = function(knex) {
  return knex('users').insert(users);
};
