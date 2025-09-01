import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";
import blogRoutes from "./routes/blogRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/events", eventRoutes);

export default app;
