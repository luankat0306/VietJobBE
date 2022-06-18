import { Router } from 'express';
import SkillCandidateController from '@controllers/skillCandidate.controller';
import { CreateSkillCandidateDto } from '@dtos/skillCandidate.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class SkillCandidateRoute implements Routes {
  public path = '/skillCandidate';
  public router = Router();
  public skillCandidatesController = new SkillCandidateController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.skillCandidatesController.getSkillCandidate);
    this.router.get(`${this.path}/:id`, this.skillCandidatesController.getSkillCandidateById);
    this.router.post(`${this.path}`, validationMiddleware(CreateSkillCandidateDto, 'body'), this.skillCandidatesController.createSkillCandidate);
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateSkillCandidateDto, 'body', true),
      this.skillCandidatesController.updateSkillCandidate,
    );
    this.router.delete(`${this.path}/:id`, this.skillCandidatesController.deleteSkillCandidate);
  }
}

export default SkillCandidateRoute;
