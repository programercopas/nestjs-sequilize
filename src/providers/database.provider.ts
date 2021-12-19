import { Sequelize } from "sequelize-typescript";
import { generateDefaultDatabaseConnection } from "../helpers/database.helper";

export const databaseProvider = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const defaultConfig = generateDefaultDatabaseConnection();
      const sequelize = new Sequelize({...defaultConfig});
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    }
  }
];