import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto, CreateQuestionsDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { TestRepository } from 'src/test/repository/test.repo';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private readonly questionRepo:Repository<Question>,
  private readonly testRepo:TestRepository
){}
  
async create(createQuestionsDto: CreateQuestionsDto) {
  const {testId,questions} = createQuestionsDto
    const test =  await this.testRepo.findByTestId(testId);
    if(!test) throw new NotFoundException("Test Not found");
    // const testQuestions = questions.map((q)=>{return {...q,test}})
    const testQuestions = questions.map((q)=>({...q,test}));
    return await this.questionRepo.save(testQuestions)
  }

  





  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
