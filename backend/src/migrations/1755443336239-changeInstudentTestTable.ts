import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeInstudentTestTable1755443336239 implements MigrationInterface {
    name = 'ChangeInstudentTestTable1755443336239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" ADD "attemptId" integer`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5" FOREIGN KEY ("attemptId") REFERENCES "student_tests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5"`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP COLUMN "attemptId"`);
    }

}
