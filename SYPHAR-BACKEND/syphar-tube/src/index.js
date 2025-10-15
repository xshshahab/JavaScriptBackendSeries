import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT || 8000;

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.on("ERROR", (error) => {
      console.error("🚨 Application encountered an error:", error);
    });

    app.listen(PORT, () => {
      console.log(`Server is up and running at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Failed to connect to MongoDB:\n", error));
