import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/users.routes.js";
import { connectDB } from "./config/db.js";
import morgan from "morgan";
import errorResponse from "./middleware/error.middleware.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerJson from "./swagger.js";

const specs = swaggerJsDoc(swaggerJson);

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// BodyParser deprecated
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/", (req, res) => {
  res.send("Hello from Memories API");
});

// Error Handler
app.use(errorResponse);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
