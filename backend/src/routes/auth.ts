import { Hono } from "hono";

const auth = new Hono();

auth.post("/signup", (c) => {
  // Signup handler logic
  return c.json({ message: "User registered" });
});

auth.post("/signin", (c) => {
  // Signin handler logic
  return c.json({ message: "User authenticated" });
});

export default auth;
