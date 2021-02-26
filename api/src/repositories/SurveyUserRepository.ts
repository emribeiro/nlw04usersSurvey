import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../Models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveyUserRepository extends Repository<SurveyUser>{

}

export { SurveyUserRepository }