import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString, ValidateNested } from "class-validator";

export class CreateStudentAnswerDto{
    @IsInt()
    questionId:number

    @IsString()
    answer:string

}
export class CreateStudentAnswersDto {
     
    @IsInt()
    testId:number

    @ValidateNested({ each: true })
    @Type(() => CreateStudentAnswerDto)
    answers: CreateStudentAnswerDto[];

}
