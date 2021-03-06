import { IsString } from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  candidateId: string;
  @IsString()
  title: string;
  @IsString()
  image?: string;
  @IsString()
  description: string;
}
