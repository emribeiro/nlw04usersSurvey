import { Router } from 'express';
import { UserController } from './controllers/userController';

const router = Router();
const userController = new UserController();

router.post("/users", userController.create);

router.get("/users", (request, response) => {
    return response.json({method : "GET", msg : "Hello World from GET in router!"});
});


export { router };