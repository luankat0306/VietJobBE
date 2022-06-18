import { NextFunction, Request, Response } from 'express';
import { CreateSkillCandidateDto } from '@dtos/skillCandidate.dto';
import { SkillCandidate } from '@interfaces/skillCandidate.interface';
import SkillCandidateService from '@services/skillCandidate.service';

class SkillCandidateController {
  public skillCandidateService = new SkillCandidateService();

  public getSkillCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = req.query;

      const findAllSkillCandidateData: SkillCandidate[] = await this.skillCandidateService.findAllSkillCandidate(params);

      res.status(200).json({ data: findAllSkillCandidateData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getSkillCandidateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillCandidateId: string = req.params.id;
      const findOneSkillCandidateData: SkillCandidate = await this.skillCandidateService.findSkillCandidateById(skillCandidateId);

      res.status(200).json({ data: findOneSkillCandidateData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createSkillCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillCandidateData: CreateSkillCandidateDto = req.body;
      const createSkillCandidateData: SkillCandidate = await this.skillCandidateService.createSkillCandidate(skillCandidateData);

      res.status(201).json({ data: createSkillCandidateData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSkillCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillCandidateId: string = req.params.id;
      const skillCandidateData: CreateSkillCandidateDto = req.body;
      const updateSkillCandidateData: SkillCandidate = await this.skillCandidateService.updateSkillCandidate(skillCandidateId, skillCandidateData);

      res.status(200).json({ data: updateSkillCandidateData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSkillCandidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillCandidateId: string = req.params.id;
      const deleteSkillCandidateData: SkillCandidate = await this.skillCandidateService.deleteSkillCandidate(skillCandidateId);

      res.status(200).json({ data: deleteSkillCandidateData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default SkillCandidateController;
