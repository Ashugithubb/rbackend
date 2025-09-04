import { IsArray, IsBoolean, IsEnum, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';



export class GetTestQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsString()
  searchValue?: string;

  @IsOptional()
  @Type(()=>Date)
  expiryDate:Date 
}