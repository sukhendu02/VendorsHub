// import rateLimit from "express-rate-limit";
const rateLimit = require("express-rate-limit");
/**
 * Custom rate limiter for sensitive endpoints like resend-verification
 */
 const createRateLimiter = ({
  windowMs = 15 * 60 * 1000, // ⏳ 15 minutes
  max = 3,                   // ✅ max 3 attempts
  message
} = {}) => {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next, options) => {
      return res.status(options.statusCode).json({
        success: false,
        message: "Too many verification requests. Please try again after 15 minutes."|| message 
      });
    }
  });
};
module.exports = { createRateLimiter };
