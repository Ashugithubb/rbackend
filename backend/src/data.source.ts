import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { StudentAnswer } from './student-answers/entities/student-answer.entity';
import { Test } from './test/entities/test.entity';
import { Question } from './question/entities/question.entity';
import { StudentTest } from './student-test/entities/student-test.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
 entities:[User,StudentAnswer,Test,Question,StudentTest],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
export default AppDataSource;