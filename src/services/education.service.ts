import { CreateEducationDto } from '@dtos/education.dto';
import { HttpException } from '@exceptions/HttpException';
import { Education } from '@interfaces/education.interface';
import educationModel from '@models/education.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class EducationService {
  public education = educationModel;
  public userService = new UserService();

  public async findAllEducation(params): Promise<Education[]> {
    const education: Education[] = await this.education.find({
      candidate: params?.candidateId,
    });
    return education;
  }

  public async findEducationById(educationId: string): Promise<Education> {
    if (isEmpty(educationId)) throw new HttpException(400, "You're not educationId");

    const findEducation: Education = await this.education.findOne({ _id: educationId });
    if (!findEducation) throw new HttpException(409, "You're not education");

    return findEducation;
  }

  public async createEducation(educationData: CreateEducationDto): Promise<Education> {
    if (isEmpty(educationData)) throw new HttpException(400, "You're not educationData");
    const { candidateId, ...rest } = educationData;

    const createEducation = await this.education.create({ ...rest, candidate: candidateId });
    return createEducation;
  }

  public async updateEducation(educationId: string, educationData: CreateEducationDto): Promise<Education> {
    if (isEmpty(educationData)) throw new HttpException(400, "You're not educationData");

    const updateEducationById = await this.education.findByIdAndUpdate(educationId, { ...educationData, candidate: educationData.candidateId });
    if (!updateEducationById) throw new HttpException(409, "You're not education");
    return updateEducationById;
  }

  public async deleteEducation(educationId: string): Promise<Education> {
    const deleteEducationById: Education = await this.education.findByIdAndDelete(educationId);
    if (!deleteEducationById) throw new HttpException(409, "You're not education");

    return deleteEducationById;
  }
}

export default EducationService;
