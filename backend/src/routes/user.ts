import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {  sign,  } from "hono/jwt";
export const userRouter=new Hono<{
  Bindings: {
    DATABASE_URL: string;
    Jwt_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          username: body.username,
          password: body.password,
        },
      });
      const jwt = await sign(
        {
          id: user.id,
        },
        c.env.Jwt_SECRET
      );
      return c.text(jwt);
    } catch (e) {
      c.status(411);
      console.log(e);
      return c.text("Invalid");
    }
  });
  
  userRouter.post("/signin", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
        },
      });
      if (!user) {
        c.status(403);
        return c.json({
          message:"Incorrect Credentials"
        })
      }
  
      const jwt = await sign(
        {
          id: user.id,
        },
        c.env.Jwt_SECRET
      );
      return c.text(jwt);
    } catch (e) {
      c.status(411);
      console.log(e);
      return c.text("Invalid");
    }
  });