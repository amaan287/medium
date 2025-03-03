import { Hono } from "hono";
import routes from "./routes/index";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const app = new Hono();

app.route("/api/v1", routes);

export default app;
