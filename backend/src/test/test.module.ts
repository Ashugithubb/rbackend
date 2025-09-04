import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { TestRepository } from './repository/test.repo';
import { StudentTestModule } from 'src/student-test/student-test.module';

@Module({
  imports:[TypeOrmModule.forFeature([Test]),StudentTestModule],
  controllers: [TestController],
  providers: [TestService,TestRepository],
  exports:[TestRepository,TestService]
})
export class TestModule {}
