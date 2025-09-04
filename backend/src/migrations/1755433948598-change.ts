import { MigrationInterface, QueryRunner } from "typeorm";

export class Change1755433948598 implements MigrationInterface {
    name = 'Change1755433948598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "duration" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "duration" character varying NOT NULL`);
    }

}
