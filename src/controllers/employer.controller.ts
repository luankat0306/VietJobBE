import { NextFunction, Request, Response } from 'express';
import { CreateEmployerDto } from '@dtos/employer.dto';
import { Employer } from '@interfaces/employer.interface';
import EmployerService from '@services/employer.service';

class EmployerController {
  public employerService = new EmployerService();

  public getEmployer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllEmployerData: Employer[] = await this.employerService.findAllEmployer();

      res.status(200).json({ data: findAllEmployerData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEmployerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employerId: string = req.params.id;
      const findOneEmployerData: Employer = await this.employerService.findEmployerById(employerId);

      res.status(200).json({ data: findOneEmployerData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEmployer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employerData: CreateEmployerDto = req.body;
      const createEmployerData: Employer = await this.employerService.createEmployer(employerData);

      res.status(201).json({ data: createEmployerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEmployer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employerId: string = req.params.id;
      const employerData: CreateEmployerDto = req.body;
      const updateEmployerData: Employer = await this.employerService.updateEmployer(employerId, employerData);

      res.status(200).json({ data: updateEmployerData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEmployer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employerId: string = req.params.id;
      const deleteEmployerData: Employer = await this.employerService.deleteEmployer(employerId);

      res.status(200).json({ data: deleteEmployerData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployerController;
