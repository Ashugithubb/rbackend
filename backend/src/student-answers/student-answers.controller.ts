import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { StudentAnswersService } from './student-answers.service';
import { CreateStudentAnswerDto, CreateStudentAnswersDto } from './dto/create-student-answer.dto';
import { UpdateStudentAnswerDto } from './dto/update-student-answer.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';

@Controller('student-answers')
export class StudentAnswersController {
  constructor(private readonly studentAnswersService: StudentAnswersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createStudentAnswersDto: CreateStudentAnswersDto,@Req() req) {
    const regId  = req.user.regId;
    return this.studentAnswersService.create(createStudentAnswersDto,regId);
  }

  @Get()
  findAll() {
    return this.studentAnswersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentAnswersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentAnswerDto: UpdateStudentAnswerDto) {
    return this.studentAnswersService.update(+id, updateStudentAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentAnswersService.remove(+id);
  }
}
