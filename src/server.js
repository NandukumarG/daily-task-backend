const path = require("path");

require("dotenv").config({
  path: path.resolve(
    process.cwd(),
    `.env.${process.env.NODE_ENV || "dev"}`
  )
});

const app = require("./app");
const connectDB = require("./config/db");
const { port, env } = require("./config");

connectDB();

app.listen(port, () => {
  console.log(`Backend running on port ${port} (${env})`);
});
