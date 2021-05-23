const users = [
  {
    email: 'arnold_admin@gmail.com',
    name: 'Arnold',
    password: 'admin123',
    role: 'administrator'
  },
  {
    email: 'violet_visitor@gmail.com',
    name: 'Violet',
    password: 'visitor123',
    role: 'visitor'
  }
];

exports.seed = function(knex) {
  return knex('users').insert(users);
};
