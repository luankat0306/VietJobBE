import { Career } from '@interfaces/career.interface';
import applicationModel from '@models/application.model';
import candidateModel from '@models/candidate.model';
import employerModel from '@models/employer.model';
import postModel from '@models/post.model';
import UserService from './users.service';

class CareerService {
  public post = postModel;
  public candidate = candidateModel;
  public employer = employerModel;
  public application = applicationModel;
  public userService = new UserService();

  public async chart(): Promise<any> {
    const chart = await this.post
      .aggregate([
        {
          $match: {
            createAt: {
              $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
            },
          },
        },
        {
          $group: {
            _id: '$createAt',
            count: {
              $sum: 1,
            },
          },
        },
      ])
      .sort({
        _id: -1,
      });

    return chart;
  }

  public async count(): Promise<any> {
    const postTotal = await this.post.count();
    const candidateTotal = await this.candidate.count();
    const employerTotal = await this.employer.count();
    const applicationTotal = await this.application.count();

    return {
      postTotal,
      candidateTotal,
      employerTotal,
      applicationTotal,
    };
  }
}

export default CareerService;
