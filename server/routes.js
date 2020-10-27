const { fetchUsers, addUser, updateUser, deleteUser } = require('./controller');

const routes = [
  {
    method: 'GET',
    url: '/api/users',
    handler: fetchUsers
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: addUser,
  },
  {
    method: 'PUT',
    url: '/api/user/:id',
    handler: updateUser
  },
  {
    method: 'DELETE',
    url: '/api/user/:id',
    handler: deleteUser
  }
]

module.exports = routes