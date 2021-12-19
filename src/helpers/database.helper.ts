import { SequelizeOptions } from 'sequelize-typescript';
import { Config } from './config.helper';

export const generateDefaultDatabaseConnection = () => {
  const config: SequelizeOptions = {
    host: Config.get('DB_DEFAULT_HOST'),
    port: Config.getNumber('DB_DEFAULT_PORT'),
    username: Config.get('DB_DEFAULT_USER'),
    password: Config.get('DB_DEFAULT_PASSWORD'),
    database: Config.get('DB_DEFAULT_NAME'),
  };

  const type = Config.get('DB_DEFAULT_DIALECT');
  switch (type) {
    case 'mariadb':
      config['dialect'] = 'mariadb';
      break;
    case 'mysql':
      config['dialect'] = 'mysql';
      break;
    case 'postgres':
      config['dialect'] = 'postgres';
      break;
    case 'mssql':
      config['dialect'] = 'mssql';
      break;
    default:
      config['dialect'] = 'mysql';
      break;
  }
  return config;
};