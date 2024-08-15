import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    Jwt_SECRET: string;
  };
}>();

app.route("/api/v1/user",userRouter);
app.route("/api/v1/user",blogRouter);

export default app;
