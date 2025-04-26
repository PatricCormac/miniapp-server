import { Hono } from "hono";

const helloRoute = new Hono();

helloRoute.get("/hello", (c) => {
  return c.json({ message: "Hello from Api" });
});

export default helloRoute;
