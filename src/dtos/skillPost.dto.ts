import { IsString } from 'class-validator';

export class CreateSkillPostDto {
  @IsString()
  postId: string;
  @IsString()
  skillId: string;
  @IsString()
  description: string;
}
