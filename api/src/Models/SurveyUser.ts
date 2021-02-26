import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Survey } from "./Survey";
import { User } from "./User";
//import {v4 as uuid} from 'uuid';
const { v4: uuidv4 } = require('uuid');


@Entity("surverys_users")
class SurveyUser{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;
    
    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;

    
    @Column()
    survey_id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name: "survey_id"})
    survey: Survey;

    @Column()
    value: string;
    

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidv4(); 
        }
    }
    
}

export { SurveyUser }