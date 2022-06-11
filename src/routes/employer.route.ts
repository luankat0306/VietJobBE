import { Router } from 'express';
import EmployerController from '@controllers/employer.controller';
import { CreateEmployerDto } from '@dtos/employer.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class EmployerRoute implements Routes {
  public path = '/employer';
  public router = Router();
  public employersController = new EmployerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employersController.getEmployer);
    this.router.get(`${this.path}/:id`, this.employersController.getEmployerById);
    this.router.post(`${this.path}`, validationMiddleware(CreateEmployerDto, 'body'), this.employersController.createEmployer);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateEmployerDto, 'body', true), this.employersController.updateEmployer);
    this.router.delete(`${this.path}/:id`, this.employersController.deleteEmployer);
  }
}

export default EmployerRoute;
