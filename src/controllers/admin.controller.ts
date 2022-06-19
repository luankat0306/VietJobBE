import CareerService from '@services/admin.service';
import { NextFunction, Request, Response } from 'express';

class CareerController {
  public adminService = new CareerService();

  public chart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const chart: any = await this.adminService.chart();

      res.status(200).json({ data: chart, message: 'chart' });
    } catch (error) {
      next(error);
    }
  };
  public count = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const count: any = await this.adminService.count();

      res.status(200).json({ data: count, message: 'count' });
    } catch (error) {
      next(error);
    }
  };
}

export default CareerController;
