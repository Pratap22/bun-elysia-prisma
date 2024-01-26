const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const todoToCreate = [
  {
    id: 1,
    title: "Task 1",
    content: "Description for Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    content: "Description for Task 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    content: "Description for Task 3",
    completed: false,
  },
  {
    id: 4,
    title: "Task 4",
    content: "Description for Task 4",
    completed: false,
  },
  {
    id: 5,
    title: "Task 5",
    content: "Description for Task 5",
    completed: false,
  },
  {
    id: 6,
    title: "Task 6",
    content: "Description for Task 6",
    completed: false,
  },
  {
    id: 7,
    title: "Task 7",
    content: "Description for Task 7",
    completed: false,
  },
  {
    id: 8,
    title: "Task 8",
    content: "Description for Task 8",
    completed: false,
  },
  {
    id: 9,
    title: "Task 9",
    content: "Description for Task 9",
    completed: false,
  },
  {
    id: 10,
    title: "Task 10",
    content: "Description for Task 10",
    completed: false,
  },
];

const seed = async (todos) => {
  console.log("Creating todo");
  for (let i = 0; i < todos.length; i++) {
    await client.todo.upsert({
      where: { id: todos[i].id },
      update: todos[i],
      create: todos[i],
    });
  }
};

seed(todoToCreate)
  .then(() => console.log("Created successfully"))
  .catch((error) => console.error("Error : ", error))
  .finally(() => {
    client.$disconnect();
    console.log("Client disconnected successfully");
  });
