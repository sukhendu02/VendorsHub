// api/index.js
import app from "../app.cjs";
import serverless from "serverless-http";

export default serverless(app);
