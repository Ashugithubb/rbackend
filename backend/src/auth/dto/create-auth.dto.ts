import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsEmail()
    regId:number

    @IsStrongPassword()
    password:string

}