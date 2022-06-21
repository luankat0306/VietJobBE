import { Router } from 'express';
import EmployersController from '@controllers/employer.controller';
import { CreateEmployerDto } from '@dtos/employer.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class EmployersRoute implements Routes {
  public path = '/employers';
  public router = Router();
  public employersController = new EmployersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employersController.getEmployers);
    this.router.get(`${this.path}/:id`, this.employersController.getEmployerById);
    this.router.get(`${this.path}/user/:id`, this.employersController.getEmployerByUserId);
    this.router.post(`${this.path}`, validationMiddleware(CreateEmployerDto, 'body', true), this.employersController.createEmployer);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateEmployerDto, 'body', true), this.employersController.updateEmployer);
    this.router.delete(`${this.path}/:id`, this.employersController.deleteEmployer);
  }
}

export default EmployersRoute;
