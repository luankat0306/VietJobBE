import { Router } from 'express';
import CareerController from '@controllers/career.controller';
import { CreateCareerDto } from '@dtos/career.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CareerRoute implements Routes {
  public path = '/career';
  public router = Router();
  public careersController = new CareerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.careersController.getCareer);
    this.router.get(`${this.path}/:id`, this.careersController.getCareerById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCareerDto, 'body'), this.careersController.createCareer);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCareerDto, 'body', true), this.careersController.updateCareer);
    this.router.delete(`${this.path}/:id`, this.careersController.deleteCareer);
  }
}

export default CareerRoute;
