import { Router } from 'express';
import ApplicationController from '@controllers/application.controller';
import { CreateApplicationDto } from '@dtos/application.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ApplicationRoute implements Routes {
  public path = '/application';
  public router = Router();
  public applicationsController = new ApplicationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.applicationsController.getApplication);
    this.router.get(`${this.path}/:id`, this.applicationsController.getApplicationById);
    this.router.post(`${this.path}`, validationMiddleware(CreateApplicationDto, 'body'), this.applicationsController.createApplication);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateApplicationDto, 'body', true), this.applicationsController.updateApplication);
    this.router.delete(`${this.path}/:id`, this.applicationsController.deleteApplication);
  }
}

export default ApplicationRoute;
