import userModel from '../models/schemas/userModel.js';

const createUser = async (info) => await userModel.create(info);

const getAllUsers = async () => await userModel.find().lean();

const getUserById = async (id) => await userModel.findOne({ _id: id }).exec();

const getUserByEmail = async (email) =>
  await userModel.findOne({ email: email });
  
const updateUserById = async (id, info) =>
  await userModel.findByIdAndUpdate({ _id: id }, { $set: info }, { new: true });

const setEnableAccountById = async (id) =>
  await userModel.findOne({ _id: id }, { $set: enabled }, { new: true });


export {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUserById,
    setEnableAccountById,
}
  
