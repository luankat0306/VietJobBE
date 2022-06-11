import { Router } from 'express';
import ProvinceController from '@controllers/province.controller';
import { CreateProvinceDto } from '@dtos/province.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ProvinceRoute implements Routes {
  public path = '/province';
  public router = Router();
  public provincesController = new ProvinceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.provincesController.getProvince);
    this.router.get(`${this.path}/:id`, this.provincesController.getProvinceById);
    this.router.post(`${this.path}`, validationMiddleware(CreateProvinceDto, 'body'), this.provincesController.createProvince);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateProvinceDto, 'body', true), this.provincesController.updateProvince);
    this.router.delete(`${this.path}/:id`, this.provincesController.deleteProvince);
  }
}

export default ProvinceRoute;
