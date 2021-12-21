import express from "express";
import { createServer } from "http";
const app = express();
const httpServer = createServer(app);
httpServer.listen(3000, async () => {
  console.log("Server running on port 3000");
});
