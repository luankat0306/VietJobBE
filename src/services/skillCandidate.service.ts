import { CreateSkillCandidateDto } from '@dtos/skillCandidate.dto';
import { HttpException } from '@exceptions/HttpException';
import { SkillCandidate } from '@interfaces/skillCandidate.interface';
import skillCandidateModel from '@models/skillCandidate.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class SkillCandidateService {
  public skillCandidate = skillCandidateModel;
  public userService = new UserService();

  public async findAllSkillCandidate(): Promise<SkillCandidate[]> {
    const skillCandidate: SkillCandidate[] = await this.skillCandidate.find();
    return skillCandidate;
  }

  public async findSkillCandidateById(skillCandidateId: string): Promise<SkillCandidate> {
    if (isEmpty(skillCandidateId)) throw new HttpException(400, "You're not skillCandidateId");

    const findSkillCandidate: SkillCandidate = await this.skillCandidate.findOne({ _id: skillCandidateId });
    if (!findSkillCandidate) throw new HttpException(409, "You're not skillCandidate");

    return findSkillCandidate;
  }

  public async createSkillCandidate(skillCandidateData: CreateSkillCandidateDto): Promise<SkillCandidate> {
    if (isEmpty(skillCandidateData)) throw new HttpException(400, "You're not skillCandidateData");

    const createSkillCandidate = await this.skillCandidate.create({ ...skillCandidateData });
    return createSkillCandidate;
  }

  public async updateSkillCandidate(skillCandidateId: string, skillCandidateData: CreateSkillCandidateDto): Promise<SkillCandidate> {
    if (isEmpty(skillCandidateData)) throw new HttpException(400, "You're not skillCandidateData");

    const updateSkillCandidateById = await this.skillCandidate.findByIdAndUpdate(skillCandidateId, { ...skillCandidateData });
    if (!updateSkillCandidateById) throw new HttpException(409, "You're not skillCandidate");
    return updateSkillCandidateById;
  }

  public async deleteSkillCandidate(skillCandidateId: string): Promise<SkillCandidate> {
    const deleteSkillCandidateById: SkillCandidate = await this.skillCandidate.findByIdAndDelete(skillCandidateId);
    if (!deleteSkillCandidateById) throw new HttpException(409, "You're not skillCandidate");

    return deleteSkillCandidateById;
  }
}

export default SkillCandidateService;
