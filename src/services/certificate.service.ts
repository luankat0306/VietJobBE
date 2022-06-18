import { CreateCertificateDto } from '@dtos/certificate.dto';
import { HttpException } from '@exceptions/HttpException';
import { Certificate } from '@interfaces/certificate.interface';
import certificateModel from '@models/certificate.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class CertificateService {
  public certificate = certificateModel;
  public userService = new UserService();

  public async findAllCertificate(params): Promise<Certificate[]> {
    const certificate: Certificate[] = await this.certificate.find({
      candidate: params?.candidateId,
    });
    return certificate;
  }

  public async findCertificateById(certificateId: string): Promise<Certificate> {
    if (isEmpty(certificateId)) throw new HttpException(400, "You're not certificateId");

    const findCertificate: Certificate = await this.certificate.findOne({ _id: certificateId });
    if (!findCertificate) throw new HttpException(409, "You're not certificate");

    return findCertificate;
  }

  public async createCertificate(certificateData: CreateCertificateDto): Promise<Certificate> {
    if (isEmpty(certificateData)) throw new HttpException(400, "You're not certificateData");
    const { candidateId, ...rest } = certificateData;

    const createCertificate = await this.certificate.create({ ...rest, candidate: candidateId });
    return createCertificate;
  }

  public async updateCertificate(certificateId: string, certificateData: CreateCertificateDto): Promise<Certificate> {
    if (isEmpty(certificateData)) throw new HttpException(400, "You're not certificateData");

    const updateCertificateById = await this.certificate.findByIdAndUpdate(certificateId, {
      ...certificateData,
      candidate: certificateData.candidateId,
    });
    if (!updateCertificateById) throw new HttpException(409, "You're not certificate");
    return updateCertificateById;
  }

  public async deleteCertificate(certificateId: string): Promise<Certificate> {
    const deleteCertificateById: Certificate = await this.certificate.findByIdAndDelete(certificateId);
    if (!deleteCertificateById) throw new HttpException(409, "You're not certificate");

    return deleteCertificateById;
  }
}

export default CertificateService;
