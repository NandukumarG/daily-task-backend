const path = require("path");

// Load env first (works locally + Docker + K8s)
require("dotenv").config({
  path: path.resolve(
    process.cwd(),
    `.env.${process.env.NODE_ENV || "dev"}`
  )
});

const app = require("./app");
const connectDB = require("./config/db");
const { port, env } = require("./config");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Backend running on port ${port} (${env})`);
    });
  } catch (err) {
    console.error("Server failed to start", err);
    process.exit(1); // 👈 IMPORTANT for Docker
  }
};

startServer();
