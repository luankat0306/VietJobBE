import { CreateApplicationDto } from '@dtos/application.dto';
import { HttpException } from '@exceptions/HttpException';
import { Application } from '@interfaces/application.interface';
import applicationModel from '@models/application.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class ApplicationService {
  public application = applicationModel;
  public userService = new UserService();

  public async findAllApplication({
    limit = 10,
    page = 1,
    ...query
  }: {
    page?: number;
    limit?: number;
    [key: string]: any;
  }): Promise<{ data: Application[]; page: number; totalPage: number }> {
    const application: Application[] = await this.application
      .find(query)
      .skip(limit * page - limit)
      .limit(limit)
      .lean()
      .populate({
        path: 'post',
        populate: {
          path: 'employer',
          populate: {
            path: 'user',
          },
        },
      });
    return {
      data: application,
      page,
      totalPage: await this.application.find(query).lean().count(),
    };
  }

  public async findApplicationById(applicationId: string): Promise<Application> {
    if (isEmpty(applicationId)) throw new HttpException(400, "You're not applicationId");

    const findApplication: Application = await this.application.findOne({ _id: applicationId });
    if (!findApplication) throw new HttpException(409, "You're not application");

    return findApplication;
  }

  public async createApplication(applicationData: CreateApplicationDto): Promise<Application> {
    if (isEmpty(applicationData)) throw new HttpException(400, "You're not applicationData");
    const { candidateId, postId } = applicationData;

    const application = await this.application.findOne({
      candidate: candidateId,
      post: postId,
    });
    if (application) throw new HttpException(409, 'Bạn đã ứng tuyển với công việc này rồi');
    const createApplication = await this.application.create({ candidate: candidateId, post: postId });
    return createApplication;
  }

  public async updateApplication(applicationId: string, applicationData: CreateApplicationDto): Promise<Application> {
    if (isEmpty(applicationData)) throw new HttpException(400, "You're not applicationData");

    const updateApplicationById = await this.application.findByIdAndUpdate(applicationId, { ...applicationData });
    if (!updateApplicationById) throw new HttpException(409, "You're not application");
    return updateApplicationById;
  }

  public async deleteApplication(applicationId: string): Promise<Application> {
    const deleteApplicationById: Application = await this.application.findByIdAndDelete(applicationId);
    if (!deleteApplicationById) throw new HttpException(409, "You're not application");

    return deleteApplicationById;
  }
}

export default ApplicationService;
