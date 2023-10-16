import * as userServices from '../services/user.services.js';
import userModel from '../models/schemas/userModel.js';
import { create_user } from '../utils/users.utils.js';
import getLogger from '../utils/log.utils.js';

const log = getLogger();

const createUser = async (req, res) => {
  const { username, first_name, last_name, email, password } = req.body;

  try {
    const userByEmail = await userModel.findOne({ email: email });
    if (userByEmail) {
      log.error('createUser - email is already in use');
      return res
        .status(400)
        .send({ status: 'error', message: 'email is already in use' });
    }

    const userByUsername = await userModel.findOne({ username: username });
    if (userByUsername) {
      log.error('createUser - username already exists');
      return res
        .status(400)
        .send({ status: 'error', message: 'username already exists' });
    }

    const result = await create_user({
      username,
      first_name,
      last_name,
      email,
      password,
    });

    const user = result.toObject();
    user.last_connection = new Date(user.last_connection).toLocaleString(
      'es-AR',
      { timeZone: 'America/Argentina/Buenos_Aires' }
    );

    res.status(201).json({
      status: 'success',
      message: 'Successful registration. Sign in to continue.',
      user: user,
    });
  } catch (error) {
    log.error('createUser - ' + error.message);
    res.status(500).send({ error: 'Internal server error' });
  }
};

export { createUser };
