import { Router } from 'express';
import CertificateController from '@controllers/certificate.controller';
import { CreateCertificateDto } from '@dtos/certificate.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CertificateRoute implements Routes {
  public path = '/certificate';
  public router = Router();
  public certificatesController = new CertificateController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.certificatesController.getCertificate);
    this.router.get(`${this.path}/:id`, this.certificatesController.getCertificateById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCertificateDto, 'body'), this.certificatesController.createCertificate);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCertificateDto, 'body', true), this.certificatesController.updateCertificate);
    this.router.delete(`${this.path}/:id`, this.certificatesController.deleteCertificate);
  }
}

export default CertificateRoute;
