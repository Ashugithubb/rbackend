import { Module } from '@nestjs/common';
import { StudentTestService } from './student-test.service';
import { StudentTestController } from './student-test.controller';
import { StudentTest } from './entities/student-test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentTestRepository } from './Repository/student.test.repo';

@Module({
   imports:[TypeOrmModule.forFeature([StudentTest])],
  controllers: [StudentTestController],
  providers: [StudentTestService,StudentTestRepository],
  exports:[StudentTestService,StudentTestRepository],
})
export class StudentTestModule {}
