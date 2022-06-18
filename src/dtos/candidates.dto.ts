import { IsObject, IsString } from 'class-validator';
import { CreateUserDto, UpdateUserDto } from './users.dto';

export class CreateCandidateDto {
  @IsString()
  public userId: string;

  @IsObject()
  public user?: UpdateUserDto;

  @IsString()
  public appliedPosition: string;
  @IsString({
    each: true,
  })
  public socialMedia: string[];

  @IsString()
  public hobby: string;

  @IsString()
  public careerGoals: string;
  @IsString()
  public wage: string;

  @IsString()
  public province: string;
  // skill: string;
  // education: string;
  // experience: string;
  // certificate: string;

  @IsString()
  public moreInfo: string;
}
