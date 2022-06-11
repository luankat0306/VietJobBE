import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class AuthSignUpCandidateDTO {
  @IsEmail()
  public email: string;
  @IsString()
  @MinLength(6)
  public password: string;

  @IsNumber()
  role: number;
}

export class AuthLoginCandidateDTO {
  @IsEmail()
  public email: string;
  @IsString()
  @MinLength(6)
  public password: string;
}
