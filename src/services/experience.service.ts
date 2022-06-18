import { CreateExperienceDto } from '@dtos/experience.dto';
import { HttpException } from '@exceptions/HttpException';
import { Experience } from '@interfaces/experience.interface';
import experienceModel from '@models/experience.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class ExperienceService {
  public experience = experienceModel;
  public userService = new UserService();

  public async findAllExperience(params): Promise<Experience[]> {
    const experience: Experience[] = await this.experience.find({
      candidate: params?.candidateId,
    });
    return experience;
  }

  public async findExperienceById(experienceId: string): Promise<Experience> {
    if (isEmpty(experienceId)) throw new HttpException(400, "You're not experienceId");

    const findExperience: Experience = await this.experience.findOne({ _id: experienceId });
    if (!findExperience) throw new HttpException(409, "You're not experience");

    return findExperience;
  }

  public async createExperience(experienceData: CreateExperienceDto): Promise<Experience> {
    if (isEmpty(experienceData)) throw new HttpException(400, "You're not experienceData");
    const { candidateId, ...rest } = experienceData;

    const createExperience = await this.experience.create({ ...rest, candidate: candidateId });
    return createExperience;
  }

  public async updateExperience(experienceId: string, experienceData: CreateExperienceDto): Promise<Experience> {
    if (isEmpty(experienceData)) throw new HttpException(400, "You're not experienceData");

    const updateExperienceById = await this.experience.findByIdAndUpdate(experienceId, { ...experienceData, candidate: experienceData.candidateId });
    if (!updateExperienceById) throw new HttpException(409, "You're not experience");
    return updateExperienceById;
  }

  public async deleteExperience(experienceId: string): Promise<Experience> {
    const deleteExperienceById: Experience = await this.experience.findByIdAndDelete(experienceId);
    if (!deleteExperienceById) throw new HttpException(409, "You're not experience");

    return deleteExperienceById;
  }
}

export default ExperienceService;
