"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/contact", contactRoutes_1.default);
app.use("/api/blogs", blogRoutes_1.default);
app.use("/api/events", eventRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map