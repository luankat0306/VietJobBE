import { NextFunction, Request, Response } from 'express';
import { CreateCertificateDto } from '@dtos/certificate.dto';
import { Certificate } from '@interfaces/certificate.interface';
import CertificateService from '@services/certificate.service';

class CertificateController {
  public certificateService = new CertificateService();

  public getCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCertificateData: Certificate[] = await this.certificateService.findAllCertificate();

      res.status(200).json({ data: findAllCertificateData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCertificateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId: string = req.params.id;
      const findOneCertificateData: Certificate = await this.certificateService.findCertificateById(certificateId);

      res.status(200).json({ data: findOneCertificateData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateData: CreateCertificateDto = req.body;
      const createCertificateData: Certificate = await this.certificateService.createCertificate(certificateData);

      res.status(201).json({ data: createCertificateData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId: string = req.params.id;
      const certificateData: CreateCertificateDto = req.body;
      const updateCertificateData: Certificate = await this.certificateService.updateCertificate(certificateId, certificateData);

      res.status(200).json({ data: updateCertificateData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId: string = req.params.id;
      const deleteCertificateData: Certificate = await this.certificateService.deleteCertificate(certificateId);

      res.status(200).json({ data: deleteCertificateData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CertificateController;
