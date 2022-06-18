import { NextFunction, Request, Response } from 'express';
import { CreateExperienceDto } from '@dtos/experience.dto';
import { Experience } from '@interfaces/experience.interface';
import ExperienceService from '@services/experience.service';

class ExperienceController {
  public experienceService = new ExperienceService();

  public getExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = req.query;

      const findAllExperienceData: Experience[] = await this.experienceService.findAllExperience(params);

      res.status(200).json({ data: findAllExperienceData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const experienceId: string = req.params.id;
      const findOneExperienceData: Experience = await this.experienceService.findExperienceById(experienceId);

      res.status(200).json({ data: findOneExperienceData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const experienceData: CreateExperienceDto = req.body;
      const createExperienceData: Experience = await this.experienceService.createExperience(experienceData);

      res.status(201).json({ data: createExperienceData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const experienceId: string = req.params.id;
      const experienceData: CreateExperienceDto = req.body;
      const updateExperienceData: Experience = await this.experienceService.updateExperience(experienceId, experienceData);

      res.status(200).json({ data: updateExperienceData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const experienceId: string = req.params.id;
      const deleteExperienceData: Experience = await this.experienceService.deleteExperience(experienceId);

      res.status(200).json({ data: deleteExperienceData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ExperienceController;
