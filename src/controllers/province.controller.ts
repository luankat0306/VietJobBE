import { NextFunction, Request, Response } from 'express';
import { CreateProvinceDto } from '@dtos/province.dto';
import { Province } from '@interfaces/province.interface';
import ProvinceService from '@services/province.service';

class ProvinceController {
  public provinceService = new ProvinceService();

  public getProvince = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProvinceData: Province[] = await this.provinceService.findAllProvince();

      res.status(200).json({ data: findAllProvinceData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProvinceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provinceId: string = req.params.id;
      const findOneProvinceData: Province = await this.provinceService.findProvinceById(provinceId);

      res.status(200).json({ data: findOneProvinceData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProvince = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provinceData: CreateProvinceDto = req.body;
      const createProvinceData: Province = await this.provinceService.createProvince(provinceData);

      res.status(201).json({ data: createProvinceData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProvince = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provinceId: string = req.params.id;
      const provinceData: CreateProvinceDto = req.body;
      const updateProvinceData: Province = await this.provinceService.updateProvince(provinceId, provinceData);

      res.status(200).json({ data: updateProvinceData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProvince = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provinceId: string = req.params.id;
      const deleteProvinceData: Province = await this.provinceService.deleteProvince(provinceId);

      res.status(200).json({ data: deleteProvinceData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProvinceController;
