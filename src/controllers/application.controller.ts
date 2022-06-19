import { NextFunction, Request, Response } from 'express';
import { CreateApplicationDto, UpdateStatusApplicationDto } from '@dtos/application.dto';
import { Application } from '@interfaces/application.interface';
import ApplicationService from '@services/application.service';

class ApplicationController {
  public applicationService = new ApplicationService();

  public getApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = req.query;
      const findAllApplicationData: any = await this.applicationService.findAllApplication(params);

      res.status(200).json({ data: findAllApplicationData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAllApplicationByPostId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = req.query;
      const findAllApplicationData: any = await this.applicationService.findAllApplicationByPostId(params);

      res.status(200).json({ data: findAllApplicationData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getApplicationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const applicationId: string = req.params.id;
      const findOneApplicationData: Application = await this.applicationService.findApplicationById(applicationId);

      res.status(200).json({ data: findOneApplicationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const applicationData: CreateApplicationDto = req.body;
      const createApplicationData: Application = await this.applicationService.createApplication(applicationData);

      res.status(201).json({ data: createApplicationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const applicationId: string = req.params.id;
      const applicationData: UpdateStatusApplicationDto = req.body;
      const updateApplicationData: Application = await this.applicationService.updateApplication(applicationId, applicationData);

      res.status(200).json({ data: updateApplicationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const applicationId: string = req.params.id;
      const deleteApplicationData: Application = await this.applicationService.deleteApplication(applicationId);

      res.status(200).json({ data: deleteApplicationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ApplicationController;
