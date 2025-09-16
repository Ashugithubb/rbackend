import { IsString, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsString()
    regId:string

    @IsStrongPassword()
    password:string

}