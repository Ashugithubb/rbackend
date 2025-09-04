import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TestModule } from './test/test.module';
import { QuestionModule } from './question/question.module';
import { StudentAnswersModule } from './student-answers/student-answers.module';
import { StudentTestModule } from './student-test/student-test.module';
import { AuthModule } from './auth/auth.module';

@Module({
 imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRootAsync(typeOrmConfig),UserModule, TestModule, QuestionModule, 
  StudentAnswersModule, StudentTestModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
