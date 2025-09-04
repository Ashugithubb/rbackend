import { MigrationInterface, QueryRunner } from "typeorm";

export class AttemptEntity1755446922790 implements MigrationInterface {
    name = 'AttemptEntity1755446922790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "PK_960f5fafd08c5693fbf6979684b"`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "PK_3059dcb4fe712a2989ecc32eb6a" PRIMARY KEY ("id", "userId", "questionId", "testId", "attemptId")`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5"`);
        await queryRunner.query(`ALTER TABLE "student_answers" ALTER COLUMN "attemptId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5" FOREIGN KEY ("attemptId") REFERENCES "student_tests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5"`);
        await queryRunner.query(`ALTER TABLE "student_answers" ALTER COLUMN "attemptId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_1cfdefdf86b87540365ff5ae2a5" FOREIGN KEY ("attemptId") REFERENCES "student_tests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "PK_3059dcb4fe712a2989ecc32eb6a"`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "PK_960f5fafd08c5693fbf6979684b" PRIMARY KEY ("id", "userId", "questionId", "testId")`);
    }

}
