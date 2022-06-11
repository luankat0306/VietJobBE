import { NextFunction, Request, Response } from 'express';
import { CreateCandidateDto } from '@dtos/candidates.dto';
import { Candidate } from '@interfaces/candidates.interface';
import CandidateService from '@services/candidates.service';

class CandidatesController {
  public candidateService = new CandidateService();

  public getCandidates = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCandidatesData: Candidate[] = await this.candidateService.findAllCandidate();

      res.status(200).json({ data: findAllCandidatesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCandidateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const candidateId: string = req.params.id;
      const findOneCandidateData: Candidate = await this.candidateService.findCandidateById(candidateId);

      res.status(200).json({ data: findOneCandidateData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getCandidateByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneCandidateData: Candidate = await this.candidateService.findCandidateByUserId(userId);

      res.status(200).json({ data: findOneCandidateData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const candidateData: CreateCandidateDto = req.body;
      const createCandidateData: Candidate = await this.candidateService.createCandidate(candidateData);

      res.status(201).json({ data: createCandidateData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const candidateId: string = req.params.id;
      const candidateData: CreateCandidateDto = req.body;
      const updateCandidateData: Candidate = await this.candidateService.updateCandidate(candidateId, candidateData);

      res.status(200).json({ data: updateCandidateData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const candidateId: string = req.params.id;
      const deleteCandidateData: Candidate = await this.candidateService.deleteCandidate(candidateId);

      res.status(200).json({ data: deleteCandidateData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CandidatesController;
