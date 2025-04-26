import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Mini App Server is working!"));
app.get("/api/hello", (c) => {
  return c.json({ message: "hello from api" });
});

serve({
  fetch: app.fetch,
  port: 3000,
});
