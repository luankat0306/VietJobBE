import { Router } from 'express';
import CandidatesController from '@controllers/candidates.controller';
import { CreateCandidateDto } from '@dtos/candidates.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CandidatesRoute implements Routes {
  public path = '/candidates';
  public router = Router();
  public candidatesController = new CandidatesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.candidatesController.getCandidates);
    this.router.get(`${this.path}/:id`, this.candidatesController.getCandidateById);
    this.router.get(`${this.path}/user/:id`, this.candidatesController.getCandidateByUserId);
    this.router.post(`${this.path}`, validationMiddleware(CreateCandidateDto, 'body'), this.candidatesController.createCandidate);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCandidateDto, 'body', true), this.candidatesController.updateCandidate);
    this.router.delete(`${this.path}/:id`, this.candidatesController.deleteCandidate);
  }
}

export default CandidatesRoute;
