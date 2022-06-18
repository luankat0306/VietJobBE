import { NextFunction, Request, Response } from 'express';
import { CreateEducationDto } from '@dtos/education.dto';
import { Education } from '@interfaces/education.interface';
import EducationService from '@services/education.service';

class EducationController {
  public educationService = new EducationService();

  public getEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = req.query;

      const findAllEducationData: Education[] = await this.educationService.findAllEducation(params);

      res.status(200).json({ data: findAllEducationData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEducationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationId: string = req.params.id;
      const findOneEducationData: Education = await this.educationService.findEducationById(educationId);

      res.status(200).json({ data: findOneEducationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationData: CreateEducationDto = req.body;
      const createEducationData: Education = await this.educationService.createEducation(educationData);

      res.status(201).json({ data: createEducationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationId: string = req.params.id;
      const educationData: CreateEducationDto = req.body;
      const updateEducationData: Education = await this.educationService.updateEducation(educationId, educationData);

      res.status(200).json({ data: updateEducationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationId: string = req.params.id;
      const deleteEducationData: Education = await this.educationService.deleteEducation(educationId);

      res.status(200).json({ data: deleteEducationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EducationController;
