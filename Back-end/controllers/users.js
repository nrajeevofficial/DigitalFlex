const UserSchema = require("../models/userSchema");

const getAllUser = async (req, res) => {
  try {
    const getAllUser = await UserSchema.find({});
    res.status(200).json(getAllUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    const getOneUser = await UserSchema.findById(id);
    res.status(200).json(getOneUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const createUser = await UserSchema.create(req.body);
    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    const updateUser = await UserSchema.findByIdAndUpdate(req.body, id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    const deleteUser = await UserSchema.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
