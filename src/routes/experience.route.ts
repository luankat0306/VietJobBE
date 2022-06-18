import { Router } from 'express';
import ExperienceController from '@controllers/experience.controller';
import { CreateExperienceDto } from '@dtos/experience.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ExperienceRoute implements Routes {
  public path = '/experience';
  public router = Router();
  public experiencesController = new ExperienceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.experiencesController.getExperience);
    this.router.get(`${this.path}/:id`, this.experiencesController.getExperienceById);
    this.router.post(`${this.path}`, validationMiddleware(CreateExperienceDto, 'body'), this.experiencesController.createExperience);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateExperienceDto, 'body', true), this.experiencesController.updateExperience);
    this.router.delete(`${this.path}/:id`, this.experiencesController.deleteExperience);
  }
}

export default ExperienceRoute;
