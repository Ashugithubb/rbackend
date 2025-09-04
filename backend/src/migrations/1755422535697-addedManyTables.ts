import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedManyTables1755422535697 implements MigrationInterface {
    name = 'AddedManyTables1755422535697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student_answers" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "questionId" integer NOT NULL, "testId" integer NOT NULL, "answers" character varying NOT NULL, CONSTRAINT "PK_960f5fafd08c5693fbf6979684b" PRIMARY KEY ("id", "userId", "questionId", "testId"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("questionId" SERIAL NOT NULL, "questionText" character varying NOT NULL, "optionA" character varying NOT NULL, "optionB" character varying NOT NULL, "optionC" character varying NOT NULL, "optionD" character varying NOT NULL, "correctAns" character varying NOT NULL, "testId" integer, CONSTRAINT "PK_036eeeea243f0e04c4a3deb5216" PRIMARY KEY ("questionId"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("testId" SERIAL NOT NULL, "tittle" character varying NOT NULL, "subject" character varying NOT NULL, "instruction" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "publishDate" TIMESTAMP NOT NULL, "expiryDate" TIMESTAMP NOT NULL, "duration" character varying NOT NULL, "totalMarks" integer NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_44b51741ba0ac81af1fbce473e1" PRIMARY KEY ("testId"))`);
        await queryRunner.query(`CREATE TABLE "student_tests" ("id" SERIAL NOT NULL, "maxAttempts" integer NOT NULL DEFAULT '2', "userId" integer, "testId" integer, CONSTRAINT "PK_7027e0ecb46286d09b5a4a7cf11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("regId" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "class" character varying NOT NULL, "school" character varying NOT NULL, "phoneNo" character varying NOT NULL, "fatherName" character varying NOT NULL, "parentNo" character varying NOT NULL, "address" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "PK_63f4d7b8ea5ce2392e024ae59c9" PRIMARY KEY ("regId"))`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_ce2df3c8edc1ae9c823d3d6aea3" FOREIGN KEY ("userId") REFERENCES "users"("regId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_ddc3986d2a233f54cc215067913" FOREIGN KEY ("questionId") REFERENCES "questions"("questionId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_answers" ADD CONSTRAINT "FK_cebf5859ec0b165cc680cdad297" FOREIGN KEY ("testId") REFERENCES "tests"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_94296641072b0f034d14e272cc6" FOREIGN KEY ("testId") REFERENCES "tests"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_tests" ADD CONSTRAINT "FK_e2d3e586a436d5b1b8661b5c558" FOREIGN KEY ("userId") REFERENCES "users"("regId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_tests" ADD CONSTRAINT "FK_d84fd68c42163cae4158e96829d" FOREIGN KEY ("testId") REFERENCES "tests"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER SEQUENCE "users_regId_seq" RESTART WITH 20251;`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_tests" DROP CONSTRAINT "FK_d84fd68c42163cae4158e96829d"`);
        await queryRunner.query(`ALTER TABLE "student_tests" DROP CONSTRAINT "FK_e2d3e586a436d5b1b8661b5c558"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_94296641072b0f034d14e272cc6"`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_cebf5859ec0b165cc680cdad297"`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_ddc3986d2a233f54cc215067913"`);
        await queryRunner.query(`ALTER TABLE "student_answers" DROP CONSTRAINT "FK_ce2df3c8edc1ae9c823d3d6aea3"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "student_tests"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "student_answers"`);
    }

}
