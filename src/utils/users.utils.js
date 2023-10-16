import userModel from '../models/schemas/userModel.js';
import { createHash } from './validations.utils.js';
import getLogger from '../utils/log.utils.js';

const log = getLogger();

export const create_user = async ({
  username,
  first_name,
  last_name,
  email,
  password,
}) => {
  try {
    const newUser = {
      username,
      first_name,
      last_name,
      email,
      password: createHash(password.toString()),
    };

    const result = await userModel.create(newUser);

    return result;
  } catch (error) {
    log.error('create_user - Error creating user: ', error);
    throw error;
  }
};
