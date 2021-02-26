import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
//import {v4 as uuid} from 'uuid';
const { v4: uuidv4 } = require('uuid');

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;


    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){   
            this.id = uuidv4();
        }
    }
    
}

export { User }