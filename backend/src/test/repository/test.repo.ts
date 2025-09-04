import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Test } from "../entities/test.entity";
import { CreateTestDto } from "../dto/create-test.dto";



@Injectable()
export class TestRepository extends Repository<Test> {
    constructor(private datasource: DataSource) {
        super(Test, datasource.createEntityManager());
    }

    async createTest(createTestDto: CreateTestDto){
        return this.save(createTestDto)
    }

    async findByTestId(id:number){
        return await this.findOneBy({testId:id})
    }

   
}