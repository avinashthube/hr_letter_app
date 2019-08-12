import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

dotenv.config();

const configuration: IConfig = {
  env: process.env.NODE_ENV,
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
  secret: process.env.SECRET_KEY,
};

Object.freeze(configuration);
export default configuration;
