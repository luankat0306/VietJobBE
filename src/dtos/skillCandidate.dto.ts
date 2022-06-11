import { IsString } from 'class-validator';

export class CreateSkillCandidateDto {
  @IsString()
  candidateId: string;
  @IsString()
  skillId: string;
  @IsString()
  description: string;
}
