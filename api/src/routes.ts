import { Router } from 'express';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/userController';

const router = Router();
const userController = new UserController();
const surveyController = new SurveyController();

router.post("/users", userController.create);

router.get("/users", (request, response) => {
    return response.json({method : "GET", msg : "Hello World from GET in router!"});
});

router.post("/surveys", surveyController.create);


export { router };