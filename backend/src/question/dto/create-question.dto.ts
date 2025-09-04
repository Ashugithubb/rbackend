import { Type } from "class-transformer";
import { IsInt, IsString, ValidateNested } from "class-validator";

export class CreateQuestionDto {
   
    @IsString()
    questionText: string

    @IsString()
    optionA: string

    @IsString()
    optionB: string

    @IsString()
    optionC: string

    @IsString()
    optionD: string

    @IsString()
    correctAns: string
}


export class CreateQuestionsDto {
  @IsInt()
  testId: number;

  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}

