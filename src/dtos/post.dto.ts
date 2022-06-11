import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  employerId: string;

  @IsString({
    each: true,
  })
  provinces: string[];

  @IsString({
    each: true,
  })
  careers: string[];

  @IsString()
  address: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  required: string;

  @IsString()
  benefit: string;

  @IsString()
  wage: string;

  @IsString()
  formality: string;

  @IsNumber()
  gender: number;

  @IsNumber()
  quantity: number;

  @IsString()
  level: string;

  @IsString()
  experience: string;

  @IsDateString()
  deadline: string;
}
