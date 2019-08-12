const { User } = require('./models/Users');

const fetchUsers = async (req, reply) => {
    console.log("model User: ", User);
    console.log("server fetchUsers req: ", req);
    console.log("server fetchUsers reply: ", reply);
  try {
    const Users = await User.find();
    console.log("server fetchUsers Users: ", Users);
    
    return Users
  }
  catch (err) {
    console.log(err);
  }
}

const addUser = async (req, reply) => {
  try {
    const NewUser = new User({ ...req.body });
    return NewUser.save()
  }
  catch (err) {
    console.log(err);
  }
}

const updateUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    const {...updateData} = user;
    const update = await User.findOneAndUpdate({id}, updateData, { new: true });
    return update;
  }
  catch (err) {
    console.log(err);
  }
}

const deleteUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const User = await User.findOneAndDelete({ id });
    return User;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = { fetchUsers, addUser, updateUser, deleteUser };