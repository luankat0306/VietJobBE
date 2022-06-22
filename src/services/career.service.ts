import { CreateCareerDto } from '@dtos/career.dto';
import { HttpException } from '@exceptions/HttpException';
import { Career } from '@interfaces/career.interface';
import careerModel from '@models/career.model';
import postModel from '@models/post.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class CareerService {
  public career = careerModel;
  public post = postModel;
  public userService = new UserService();

  public async findAllCareer(): Promise<Career[]> {
    const career: Career[] = await this.career.find();
    return career;
  }

  public async countJob(): Promise<any> {
    const career = await this.career.find();
    const newData = await Promise.all(
      career.map(async item => {
        const countPosts = await this.post
          .find({
            careers: item.name,
          })
          .count();
        return {
          name: item.name,
          count: countPosts,
        };
      }),
    );
    return newData?.filter(item => item?.name !== 'Tất cả ngành nghề' || item?.count !== 0).sort((a, b) => b.count - a.count);
  }

  public async findCareerById(careerId: string): Promise<Career> {
    if (isEmpty(careerId)) throw new HttpException(400, "You're not careerId");

    const findCareer: Career = await this.career.findOne({ _id: careerId });
    if (!findCareer) throw new HttpException(409, "You're not career");

    return findCareer;
  }

  public async createCareer(careerData: CreateCareerDto): Promise<Career> {
    if (isEmpty(careerData)) throw new HttpException(400, "You're not careerData");

    const createCareer = await this.career.create({ ...careerData });
    return createCareer;
  }

  public async updateCareer(careerId: string, careerData: CreateCareerDto): Promise<Career> {
    if (isEmpty(careerData)) throw new HttpException(400, "You're not careerData");

    const updateCareerById = await this.career.findByIdAndUpdate(careerId, { ...careerData });
    if (!updateCareerById) throw new HttpException(409, "You're not career");
    return updateCareerById;
  }

  public async deleteCareer(careerId: string): Promise<Career> {
    const deleteCareerById: Career = await this.career.findByIdAndDelete(careerId);
    if (!deleteCareerById) throw new HttpException(409, "You're not career");

    return deleteCareerById;
  }
}

export default CareerService;
