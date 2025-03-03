import { Hono } from "hono";

const blog = new Hono();

blog.post("/", (c) => {
  // Create blog post logic
  return c.json({ message: "Blog post created" });
});

blog.put("/:id", (c) => {
  // Update blog post logic
  const id = c.req.param("id");
  return c.json({ message: `Blog post ${id} updated` });
});

blog.get("/", (c) => {
  // List blog posts logic
  return c.json({ posts: [] });
});

blog.get("/:id", (c) => {
  // Get single blog post logic
  const id = c.req.param("id");
  return c.json({ id, title: "Sample Post" });
});

export default blog;
