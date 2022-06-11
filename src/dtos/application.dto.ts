import { IsDateString, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  candidateId: string;
  @IsString()
  postId: string;
  @IsString()
  status: string;
  @IsDateString()
  createAt: string;
  @IsDateString()
  updatedAt: string;
}
