import { CreateEmployerDto } from '@dtos/employer.dto';
import { HttpException } from '@exceptions/HttpException';
import { Employer } from '@interfaces/employer.interface';
import employerModel from '@models/employer.model';
import userModel from '@models/user.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class EmployerService {
  public employer = employerModel;
  public user = userModel;
  public userService = new UserService();

  public async findAllEmployer(): Promise<Employer[]> {
    const employer: Employer[] = await this.employer.find().populate('user');
    return employer;
  }

  public async findEmployerById(employerId: string): Promise<Employer> {
    if (isEmpty(employerId)) throw new HttpException(400, "You're not employerId");

    const findEmployer: Employer = await this.employer.findOne({ _id: employerId }).populate('user');
    if (!findEmployer) throw new HttpException(409, "You're not employer");

    return findEmployer;
  }

  public async findEmployerByUserId(userId: string): Promise<Employer> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not employerId");

    const findEmployer: Employer = await this.employer.findOne({ user: userId }).populate('user');
    if (!findEmployer) throw new HttpException(409, "You're not employer");

    return findEmployer;
  }

  public async createEmployer(employerData: CreateEmployerDto): Promise<Employer> {
    if (isEmpty(employerData)) throw new HttpException(400, "You're not employerData");

    const findEmployerByUserId = await await this.employer.findOne({ user: employerData.userId });
    if (findEmployerByUserId) throw new HttpException(409, `You're user_id ${employerData.userId} already exists`);

    const findUser = await this.userService.findUserById(employerData.userId);
    if (!findUser) throw new HttpException(409, "You're not user");
    const createEmployer = await this.employer.create({ ...employerData });
    return createEmployer;
  }

  public async updateEmployer(employerId: string, employerData: CreateEmployerDto): Promise<Employer> {
    if (isEmpty(employerData)) throw new HttpException(400, "You're not employerData");

    const { userId, user, ...rest } = employerData;
    if (user) {
      const newuser = await this.user.findByIdAndUpdate(userId, { ...user });
      console.log('user', newuser);
    }
    const updateEmployerById = await this.employer.findByIdAndUpdate(
      employerId,
      {
        ...rest,
      },
      { new: true, upsert: true },
    );
    if (!updateEmployerById) throw new HttpException(409, "You're not employer");
    return updateEmployerById;
  }

  public async deleteEmployer(employerId: string): Promise<Employer> {
    const deleteEmployerById: Employer = await this.employer.findByIdAndDelete(employerId);
    if (!deleteEmployerById) throw new HttpException(409, "You're not employer");

    return deleteEmployerById;
  }
}

export default EmployerService;
