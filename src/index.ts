import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import todoRoutes from "./routes/todos";

const todoApp = new Elysia();
todoApp.use(swagger());

todoApp.group("/api", (app) => app.use(todoRoutes)).listen(3000);

console.log(
  `🦊 Elysia is running at ${todoApp.server?.hostname}:${todoApp.server?.port}`
);
