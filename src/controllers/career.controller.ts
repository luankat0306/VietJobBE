import { NextFunction, Request, Response } from 'express';
import { CreateCareerDto } from '@dtos/career.dto';
import { Career } from '@interfaces/career.interface';
import CareerService from '@services/career.service';

class CareerController {
  public careerService = new CareerService();

  public getCareer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCareerData: Career[] = await this.careerService.findAllCareer();

      res.status(200).json({ data: findAllCareerData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCareerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const careerId: string = req.params.id;
      const findOneCareerData: Career = await this.careerService.findCareerById(careerId);

      res.status(200).json({ data: findOneCareerData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCareer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const careerData: CreateCareerDto = req.body;
      const createCareerData: Career = await this.careerService.createCareer(careerData);

      res.status(201).json({ data: createCareerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCareer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const careerId: string = req.params.id;
      const careerData: CreateCareerDto = req.body;
      const updateCareerData: Career = await this.careerService.updateCareer(careerId, careerData);

      res.status(200).json({ data: updateCareerData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCareer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const careerId: string = req.params.id;
      const deleteCareerData: Career = await this.careerService.deleteCareer(careerId);

      res.status(200).json({ data: deleteCareerData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CareerController;
