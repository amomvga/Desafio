import { Request, Response } from "express";
import db from "../../models";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { userName, email, password } = req.body;

      const createUsers = await db.User.create({
        userName,
        email,
        password,
      });
      return res.status(201).json(createUsers);
    } catch (error) {
      return res.json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const users = await db.User.findAll();

    return res.json(users);
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params;

    const user = await db.User.findOne({
      where: { id: userId },
    });

    if (user) {
      return res.json(user);
    }
    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { userId } = req.params;

    await db.User.destroy({ where: { id: userId } });
    return res.status(204).send();
  }

  async update(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      await db.User.update(req.body, { where: { id: userId } });

      return res.json({ message: "ok" });
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new UserController();
