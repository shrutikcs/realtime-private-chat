import { Elysia, t } from "elysia";

const rooms = new Elysia({ prefix: "/room" }).post("/create", () => {
  console.log("create a new room!");
});

export const app = new Elysia({ prefix: "/api" }).use(rooms);

export const GET = app.fetch;
export const POST = app.fetch;
