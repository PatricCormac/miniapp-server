import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

import helloRoute from "./routes/hello.js";

const app = new Hono();

app.use(
  "/*",
  serveStatic({
    root: "./frontend",
    rewriteRequestPath: (path) => {
      if (path === "/") {
        return "/index.html";
      }

      return path;
    },
  })
);

app.route("/api", helloRoute);

serve({
  fetch: app.fetch,
  port: 3000,
});
