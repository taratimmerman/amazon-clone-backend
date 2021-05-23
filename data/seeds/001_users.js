require('dotenv').config();

const users = [
  {
    email: 'addie_admin@gmail.com',
    name: 'Addie',
    password: 'admin123',
    role: 'administrator',
    city: 'Salt Lake City'
  },
  {
    email: 'vicky_visitor@gmail.com',
    name: 'Vicky',
    password: 'visitor123',
    role: 'visitor',
    city: 'West Valley City'
  }
];

exports.seed = function(knex) {
  return knex('users').insert(users);
};
