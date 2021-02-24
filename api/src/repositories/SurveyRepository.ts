import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../Models/Survey";


@EntityRepository(Survey)
class SurveyRepository extends Repository<Survey>{

}

export { SurveyRepository }