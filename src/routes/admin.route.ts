import AdminController from '@controllers/admin.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class AdminRoute implements Routes {
  public path = '/admin';
  public router = Router();
  public adminsController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/chart`, this.adminsController.chart);
    this.router.get(`${this.path}/count`, this.adminsController.count);
  }
}

export default AdminRoute;
