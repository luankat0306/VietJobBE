import { Router } from 'express';
import EducationController from '@controllers/education.controller';
import { CreateEducationDto } from '@dtos/education.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class EducationRoute implements Routes {
  public path = '/education';
  public router = Router();
  public educationsController = new EducationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.educationsController.getEducation);
    this.router.get(`${this.path}/:id`, this.educationsController.getEducationById);
    this.router.post(`${this.path}`, validationMiddleware(CreateEducationDto, 'body'), this.educationsController.createEducation);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateEducationDto, 'body', true), this.educationsController.updateEducation);
    this.router.delete(`${this.path}/:id`, this.educationsController.deleteEducation);
  }
}

export default EducationRoute;
