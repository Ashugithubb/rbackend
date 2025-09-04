import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { TestRepository } from './repository/test.repo';
import { StudentTestRepository } from 'src/student-test/Repository/student.test.repo';
import { GetTestQueryDto } from './dto/query.dto';

@Injectable()
export class TestService {
  constructor(private readonly testRepo: TestRepository,
    private readonly studentTestRepo: StudentTestRepository
  ) { }

  async create(createTestDto: CreateTestDto, role: string) {
    if (role === 'Student') throw new ForbiddenException("Only Admin can create Test");
    return await this.testRepo.createTest(createTestDto);
  }

  async findAllTest(query: GetTestQueryDto) {
    const { page = 1, limit = 5, searchValue, expiryDate, } = query;

    const now = new Date()
    const qb = await this.testRepo
      .createQueryBuilder('test')

      qb.andWhere("test.publishDate <=:now", { now })

    if (searchValue) {
      qb.andWhere(
        '(test.title ILIKE :search )', { search: `%${searchValue}%` }
      );
    }
    if (expiryDate) {
      qb.andWhere("DATE(test.expiryDate)=:date", {date:expiryDate })
    }
    const [tests, total] = await qb
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();
    return {
      total,
      page,
      limit,
      tests,
    };

  }



  async findOne(id: number, regId: number) {
    const attemptOver = await this.studentTestRepo.findOne({
      where: {
        user: { regId },
        test: { testId: id },
        maxAttempts: 1
      }
    })
    if (attemptOver) {
      throw new BadRequestException("Your Attempt is Over")
    }
    const test = await this.testRepo.findByTestId(id);
    if (!test) throw new NotFoundException()
    const now = new Date()
    if (test.expiryDate < now) {
      throw new BadRequestException("Test Expired")
    }

    const qb = this.testRepo
      .createQueryBuilder("test")
      .leftJoin("test.questions", "questions")

    qb.where("test.testId = :id", { id })

    qb.addSelect("questions.questionId")
    qb.addSelect("questions.questionText")
    qb.addSelect("questions.optionA")
    qb.addSelect("questions.optionB")
    qb.addSelect("questions.optionC")
    qb.addSelect("questions.optionD")

    const testWithQuestion = qb.getOne()
    return testWithQuestion;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
