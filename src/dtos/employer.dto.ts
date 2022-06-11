import { IsString } from 'class-validator';

export class CreateEmployerDto {
  @IsString()
  public userId: string;

  @IsString()
  public description: string;

  @IsString()
  public website: string;

  @IsString()
  public scale: string;
}
