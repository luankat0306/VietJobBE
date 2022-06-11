import { IsString } from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  candidateId: string;
  @IsString()
  name: string;
  @IsString()
  image: string;
  @IsString()
  description: string;
}
