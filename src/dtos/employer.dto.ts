import { IsObject, IsString } from 'class-validator';
import { UpdateUserDto } from './users.dto';

export class CreateEmployerDto {
  @IsString()
  public userId: string;

  @IsObject()
  public user?: UpdateUserDto;

  @IsString()
  public description: string;

  @IsString()
  public website: string;

  @IsString()
  public scale: string;
}
