import {Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository";
import UserRepository from "../repositories/UserRepository";
import SendEmailService from "../services/SendEmailService";
import {resolve} from 'path';

class SendEmailController{
    async execute(request: Request, response: Response){
        const {email, survey_id} = request.body;

        const userRepository = getCustomRepository(UserRepository);
        const surveyRepository = getCustomRepository(SurveyRepository);
        const surveyUserRepository = getCustomRepository(SurveyUserRepository);

        
        const user = await userRepository.findOne({ email });


        if(!user){
            return response.status(400).json({
                error: "User not Exists"
            });
        }

        const survey = await surveyRepository.findOne({id: survey_id});

        if(!survey){
            return response.status(400).json({
                error: "Survey not found"
            });
        }

        const surveyUser = surveyUserRepository.create({
            user_id: user.id,
            survey_id: survey.id,
        });

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            link: process.env.URL_EMAIL,
            user_id: user.id,
            survey_id: survey.id
        }

        const surveyUserAlreadyExists = await surveyUserRepository.findOne({
            where: [{user_id: user.id}, {survey_id: survey.id}, {value: null}],
            relations: ["user", "survey"]
        });

        const npsPath = resolve(__dirname,"..", "views", "emails", "npsEmail.hbs");

        if(surveyUserAlreadyExists){
            await SendEmailService.execute(email, survey.title,variables, npsPath);
            return response.json(surveyUserAlreadyExists);
        }
    

        await SendEmailService.execute(email, survey.title, variables, npsPath);

        await surveyUserRepository.save(surveyUser);

        return response.status(200).json(surveyUser);
    }
}

export { SendEmailController }