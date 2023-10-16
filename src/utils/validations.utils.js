import bcrypt from 'bcrypt';

const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isSamePassword = async (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

const isValidPassword = async (user, password) =>
  bcrypt.compareSync(password, user.password);

export { createHash, isSamePassword, isValidPassword };
