import request from "supertest";
import {app} from "../app"

import createConnection from "../database"

describe("Users", () => {

    beforeAll(async () => {
        const connection  = await createConnection();
        await connection.runMigrations();
    });


    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/survey")
        .send({
            title: "test survey",
            description: "Test Survey Description"
        })

        expect(response.status).toBe(201);
    });

    it("it should be able to return a list of surveys", async () => {
        const response = await request(app).get("/survey")
            .send();

        expect(response.status).toBe(200);
    });
});

