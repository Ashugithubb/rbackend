import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeInstudentTestTable1755443694216 implements MigrationInterface {
    name = 'ChangeInstudentTestTable1755443694216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" RENAME COLUMN "answers" TO "answer"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_answers" RENAME COLUMN "answer" TO "answers"`);
    }

}
