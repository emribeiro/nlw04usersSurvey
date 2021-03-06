import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614090534802 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "ID",
                        type: "uuid",
                        isPrimary: true
                    
                    },

                    {
                        name: "name",
                        type: "varchar"
                    },

                    {
                        name: "email",
                        type: "varchar"
                    },

                    {
                        name: "created_at",
                        type: "Date",
                        default: "now()"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
