import "./loadEnvironments.js";
import chalk from "chalk";
import app from "./server/index.js";
import mongoose from "mongoose";
import createDebug from "debug";

const debug = createDebug("items-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGO_DB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red("Problems with the environment variables!"));
  process.exit(1);
}

app.listen(port, () => {
  debug(chalk.green(`Listening on http://localhost:${port}`));
});

try {
  await mongoose.connect(mongoDbConnection);
  debug(chalk.green("Connection to the database succesful"));
} catch {
  debug(chalk.red("Error while connecting to the database"));
}
