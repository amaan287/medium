// routes/index.js
import { Hono } from "hono";
import authRoutes from "./auth";
import blogRoutes from "./blog";

const router = new Hono();

// Mount sub-routers
router.route("/auth", authRoutes);
router.route("/blog", blogRoutes);

// Any root-level routes
router.get("/", (c) => {
  return c.text("API v1 root");
});
export default router;
