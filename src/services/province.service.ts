import { CreateProvinceDto } from '@dtos/province.dto';
import { HttpException } from '@exceptions/HttpException';
import { Province } from '@interfaces/province.interface';
import provinceModel from '@models/province.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class ProvinceService {
  public province = provinceModel;
  public userService = new UserService();

  public async findAllProvince(): Promise<Province[]> {
    const province: Province[] = await this.province.find();
    return province;
  }

  public async findProvinceById(provinceId: string): Promise<Province> {
    if (isEmpty(provinceId)) throw new HttpException(400, "You're not provinceId");

    const findProvince: Province = await this.province.findOne({ _id: provinceId });
    if (!findProvince) throw new HttpException(409, "You're not province");

    return findProvince;
  }

  public async createProvince(provinceData: CreateProvinceDto): Promise<Province> {
    if (isEmpty(provinceData)) throw new HttpException(400, "You're not provinceData");

    const createProvince = await this.province.create({ ...provinceData });
    return createProvince;
  }

  public async updateProvince(provinceId: string, provinceData: CreateProvinceDto): Promise<Province> {
    if (isEmpty(provinceData)) throw new HttpException(400, "You're not provinceData");

    const updateProvinceById = await this.province.findByIdAndUpdate(provinceId, { ...provinceData });
    if (!updateProvinceById) throw new HttpException(409, "You're not province");
    return updateProvinceById;
  }

  public async deleteProvince(provinceId: string): Promise<Province> {
    const deleteProvinceById: Province = await this.province.findByIdAndDelete(provinceId);
    if (!deleteProvinceById) throw new HttpException(409, "You're not province");

    return deleteProvinceById;
  }
}

export default ProvinceService;
