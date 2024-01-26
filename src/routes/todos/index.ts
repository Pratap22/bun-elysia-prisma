import { Elysia, t } from "elysia";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "./handlers";

const todoRoutes = new Elysia({ prefix: "/todos" })
  .get("/", () => getTodos())
  .post("/", ({ body }) => createTodo(body), {
    body: t.Object({ title: t.String(), content: t.String() }),
  })
  .get("/:id", ({ params: { id } }) => getTodoById(id), {
    params: t.Object({ id: t.Numeric() }),
  })
  .patch("/:id", ({ params: { id }, body }) => updateTodo(Number(id), body), {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({
      title: t.Optional(t.String()),
      content: t.Optional(t.String()),
    }),
  })
  .delete("/:id", ({ params: { id } }) => deleteTodo(id), {
    params: t.Object({ id: t.Numeric() }),
  });

export default todoRoutes;
