import { Router } from 'express';
import SkillController from '@controllers/skill.controller';
import { CreateSkillDto } from '@dtos/skill.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class SkillRoute implements Routes {
  public path = '/skill';
  public router = Router();
  public skillsController = new SkillController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.skillsController.getSkill);
    this.router.get(`${this.path}/:id`, this.skillsController.getSkillById);
    this.router.post(`${this.path}`, validationMiddleware(CreateSkillDto, 'body'), this.skillsController.createSkill);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateSkillDto, 'body', true), this.skillsController.updateSkill);
    this.router.delete(`${this.path}/:id`, this.skillsController.deleteSkill);
  }
}

export default SkillRoute;
