import { IsNumber, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  candidateId: string;
  @IsString()
  postId: string;
}

export class UpdateStatusApplicationDto {
  @IsNumber()
  status: number;
}
