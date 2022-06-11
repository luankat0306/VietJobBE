import { CreateSkillDto } from '@dtos/skill.dto';
import { HttpException } from '@exceptions/HttpException';
import { Skill } from '@interfaces/skill.interface';
import skillModel from '@models/skill.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class SkillService {
  public skill = skillModel;
  public userService = new UserService();

  public async findAllSkill(): Promise<Skill[]> {
    const skill: Skill[] = await this.skill.find();
    return skill;
  }

  public async findSkillById(skillId: string): Promise<Skill> {
    if (isEmpty(skillId)) throw new HttpException(400, "You're not skillId");

    const findSkill: Skill = await this.skill.findOne({ _id: skillId });
    if (!findSkill) throw new HttpException(409, "You're not skill");

    return findSkill;
  }

  public async createSkill(skillData: CreateSkillDto): Promise<Skill> {
    if (isEmpty(skillData)) throw new HttpException(400, "You're not skillData");

    const createSkill = await this.skill.create({ ...skillData });
    return createSkill;
  }

  public async updateSkill(skillId: string, skillData: CreateSkillDto): Promise<Skill> {
    if (isEmpty(skillData)) throw new HttpException(400, "You're not skillData");

    const updateSkillById = await this.skill.findByIdAndUpdate(skillId, { ...skillData });
    if (!updateSkillById) throw new HttpException(409, "You're not skill");
    return updateSkillById;
  }

  public async deleteSkill(skillId: string): Promise<Skill> {
    const deleteSkillById: Skill = await this.skill.findByIdAndDelete(skillId);
    if (!deleteSkillById) throw new HttpException(409, "You're not skill");

    return deleteSkillById;
  }
}

export default SkillService;
