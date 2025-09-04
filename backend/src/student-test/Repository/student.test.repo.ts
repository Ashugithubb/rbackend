import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { StudentTest } from "../entities/student-test.entity";

@Injectable()
export class StudentTestRepository extends Repository<StudentTest> {
    constructor(private datasource: DataSource) {
        super(StudentTest, datasource.createEntityManager());
    }
}