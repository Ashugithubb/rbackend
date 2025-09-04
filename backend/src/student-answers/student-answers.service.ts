import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateStudentAnswerDto, CreateStudentAnswersDto } from './dto/create-student-answer.dto';
import { UpdateStudentAnswerDto } from './dto/update-student-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentAnswer } from './entities/student-answer.entity';
import { Repository } from 'typeorm';
import { UserRepository } from 'src/user/repository/user.repo';
import { TestRepository } from 'src/test/repository/test.repo';
import { StudentTestRepository } from 'src/student-test/Repository/student.test.repo';
import { Console } from 'console';

@Injectable()
export class StudentAnswersService {
  constructor(@InjectRepository(StudentAnswer) private readonly studentAnsRepo: Repository<StudentAnswer>,
    private readonly userRepo: UserRepository,
    private readonly testRepo: TestRepository,
    private readonly studentTestRepo: StudentTestRepository
  ) { }

  async create(createStudentAnswersDto: CreateStudentAnswersDto, regId: number) {

    const { testId, answers } = createStudentAnswersDto;

    const user = await this.userRepo.findById(regId);

    if (!user) throw new UnauthorizedException()

    const test = await this.testRepo.findOneBy({ testId })

    if (!test) throw new BadRequestException()

    const existing = await this.studentTestRepo.findOne({
      where: {
        user:{regId},
        test:{testId}  
      },
    })

    if (existing) {
      console.log("existing",existing)



      const studentTest = this.studentTestRepo.create({
        user,
        test,
        maxAttempts: 1
      })
      const studentAttempt = await this.studentTestRepo.save(studentTest);
      const attemptId = studentAttempt.id;

      const saveStudentAnswers = answers.map((a) => ({
        ...a,
        user,
        test,
        studentAttempt
      }))

       await this.studentAnsRepo.save(saveStudentAnswers);
       return "Test Submited";

    } 
    const studentTest = this.studentTestRepo.create({
      user,
      test,
      maxAttempts: 2
    })
    const studentAttempt = await this.studentTestRepo.save(studentTest);
    const attemptId = studentAttempt.id;

    const saveStudentAnswers = answers.map((a) => ({
      ...a,
      user,
      test,
      studentAttempt
    }))
  await this.studentAnsRepo.save(saveStudentAnswers);
  return "Test Submited";
  }

  findAll() {
    return `This action returns all studentAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAnswer`;
  }

  update(id: number, updateStudentAnswerDto: UpdateStudentAnswerDto) {
    return `This action updates a #${id} studentAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAnswer`;
  }
}
