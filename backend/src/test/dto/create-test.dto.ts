import { Transform, Type } from "class-transformer";
import { IsDate, IsInt, IsString, Validate, validate } from "class-validator";
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'dateValidation', async: false })
export class IsBefore implements ValidatorConstraintInterface {
    validate(expiryDate, args: ValidationArguments) {
        const obj: any = args.object;

        if (!obj.publishDate || !expiryDate) return false;
        return new Date(expiryDate) > new Date(obj.publishDate);
    }
    defaultMessage(args: ValidationArguments) {
        return "ExpiryDate must be greater than Publish date";
    }
}

export class CreateTestDto {
    @IsString()
    title: string

    @IsString()
    subject: string

    @IsString()
    instruction: string

    @IsDate()
    @Type(() => Date)
    publishDate: Date

    @IsDate()
    @Type(() => Date)
    @Validate(IsBefore)
    expiryDate: Date

    @IsInt()
    @Transform(({ value }) => parseInt(value, 10))
    duration: number

    @Transform(({ value }) => parseInt(value, 10))
    @IsInt()
    totalMarks: number
}
