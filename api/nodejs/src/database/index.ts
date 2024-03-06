import { Umzug, SequelizeStorage } from "umzug";
import { sequelize } from "../models";

const getGlob = (): string => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "development") {
    return "src/migrations/*.ts";
  }

  return "dist/migrations/*.js";
};

export const umzug = new Umzug({
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  migrations: { glob: getGlob() },
  logger: console,
});

if (require.main === module) {
  umzug.up().catch(err => {
    console.error("Migration failed:", err);
    process.exit(1);
  });
}
