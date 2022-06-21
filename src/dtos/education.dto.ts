import { IsBoolean, IsString } from 'class-validator';

export class CreateEducationDto {
  @IsString()
  candidateId: string;

  @IsString()
  title: string;

  @IsBoolean()
  isCurrent: boolean;

  @IsString()
  dateStart?: string;

  @IsString()
  dateEnd?: string;

  @IsString()
  description: string;
}
