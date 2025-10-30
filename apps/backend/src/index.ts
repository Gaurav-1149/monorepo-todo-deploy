import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await client.user.findMany()

      res.json(users);
})

app.post("/user", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }

 const user = await client.user.create({
    data: {
      username,
      password
    }
  })




  
      res.status(201).json(user);
})

app.listen(3001);