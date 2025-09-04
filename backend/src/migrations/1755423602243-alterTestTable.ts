import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTestTable1755423602243 implements MigrationInterface {
    name = 'AlterTestTable1755423602243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "tittle"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "isActive" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "tittle" character varying NOT NULL`);
    }

}
