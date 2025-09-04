import { Module } from '@nestjs/common';
import { StudentAnswersService } from './student-answers.service';
import { StudentAnswersController } from './student-answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentAnswer } from './entities/student-answer.entity';
import { UserModule } from 'src/user/user.module';
import { TestModule } from 'src/test/test.module';
import { StudentTestModule } from 'src/student-test/student-test.module';

@Module({
   imports:[TypeOrmModule.forFeature([StudentAnswer]),UserModule,TestModule,StudentTestModule],
  controllers: [StudentAnswersController],
  providers: [StudentAnswersService],
})
export class StudentAnswersModule {}
