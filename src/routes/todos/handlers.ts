import { NotFoundError } from "elysia";
import prisma from "../../db";

export async function getTodos() {
  try {
    return await prisma.todo.findMany({ orderBy: { createdAt: "asc" } });
  } catch (error) {
    console.error("Error getting Todos ", error);
  }
}

export async function createTodo(data: { title: string; content: string }) {
  try {
    const { title, content } = data;
    const todo = await prisma.todo.create({
      data: { title, content },
    });
    if (!todo) {
      throw new NotFoundError("Todo not found");
    }
    return todo;
  } catch (error) {
    console.error("Error Creating Todo", error);
  }
}

export async function getTodoById(id: number) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      throw new NotFoundError("Todo not found");
    }
    return todo;
  } catch (error) {
    console.error("Error getting Todo with id ", id, error);
  }
}

export async function updateTodo(
  id: number,
  data: { title?: string; content?: string; completed?: boolean }
) {
  try {
    const { title, content, completed } = data;
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(completed !== undefined && completed !== null && { completed }),
      },
    });
    if (!todo) {
      throw new NotFoundError("Todo not found");
    }
    return todo;
  } catch (error) {
    console.error("Error updating Todo with id ", id, error);
  }
}

export async function deleteTodo(id: number) {
  try {
    const todo = await prisma.todo.delete({ where: { id } });
    if (!todo) {
      throw new NotFoundError("Todo not found");
    }
    return todo;
  } catch (error) {
    console.error("Error deleting Todo with id ", id, error);
  }
}
