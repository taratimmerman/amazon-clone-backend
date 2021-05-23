require('dotenv').config();

const users = [
  {
    email: 'tara_admin@gmail.com',
    name: 'Tara',
    password: process.env.ADMIN_PASSWORD,
    role: 'administrator'
  },
  {
    email: 'victor_visitor@gmail.com',
    name: 'Victor',
    password: 'visitor123',
    role: 'visitor'
  }
];

exports.seed = function(knex) {
  return knex('users').insert(users);
};
