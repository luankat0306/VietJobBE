import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  public userId: string;

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
  // skill: string;
  // education: string;
  // experience: string;
  // certificate: string;

  @IsString()
  public moreInfo: string;
}
