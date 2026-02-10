const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

/**
 * Health check
 * - App is alive
 */
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "daily-task-backend",
    timestamp: new Date().toISOString()
  });
});

/**
 * Readiness check
 * - App is ready to accept traffic
 * - DB must be connected
 */
router.get("/ready", (req, res) => {
  const dbState = mongoose.connection.readyState;

  if (dbState === 1) {
    return res.status(200).json({
      status: "READY",
      database: "CONNECTED"
    });
  }

  res.status(503).json({
    status: "NOT_READY",
    database: "DISCONNECTED"
  });
});

module.exports = router;
