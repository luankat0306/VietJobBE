import { IsString } from 'class-validator';

export class CreateEducationDto {
  @IsString()
  candidateId: string;

  @IsString()
  title: string;

  @IsString()
  dateStart?: string;

  @IsString()
  dateEnd?: string;

  @IsString()
  description: string;
}
