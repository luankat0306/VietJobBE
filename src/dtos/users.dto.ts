import { IsDate, IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(6)
  public password?: string;

  @IsString()
  public avatar?: string;

  @IsString()
  public name: string;

  @IsNumber()
  public gender?: number;

  @IsDate()
  public birthDay?: Date;

  @IsString()
  public phoneNumber?: string;

  @IsNumber()
  public role: number;

  @IsString()
  public cover: string;
}

export class UpdateUserDto {
  @IsString()
  public _id: string;

  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(6)
  public password: string;

  @IsString()
  public avatar: string;

  @IsString()
  public name: string;

  @IsNumber()
  public gender: number;

  @IsDate()
  public birthDay: Date;

  @IsString()
  public phoneNumber: string;

  @IsNumber()
  public role: number;
}
