import { IsEnum, IsString } from "class-validator";
import { Role } from "../enum/user.enum";

export class CreateUserDto {

    @IsString()
    regId: string

    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    class: string

    @IsString()
    school: string

    @IsString()
    phoneNo: string

    @IsString()
    fatherName: string

    @IsString()
    parentNo: string

    @IsString()
    address: string

    @IsString()
    password: string

    @IsEnum(Role)
    role: Role
}
