import { CreateCandidateDto } from '@dtos/candidates.dto';
import { HttpException } from '@exceptions/HttpException';
import { Candidate } from '@interfaces/candidates.interface';
import candidateModel from '@models/candidate.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class CandidateService {
  public candidate = candidateModel;
  public userService = new UserService();

  public async findAllCandidate(): Promise<Candidate[]> {
    const candidate: Candidate[] = await this.candidate.find();
    return candidate;
  }

  public async findCandidateById(candidateId: string): Promise<Candidate> {
    if (isEmpty(candidateId)) throw new HttpException(400, "You're not candidateId");

    const findCandidate: Candidate = await this.candidate.findOne({ _id: candidateId });
    if (!findCandidate) throw new HttpException(409, "You're not candidate");

    return findCandidate;
  }

  public async findCandidateByUserId(userId: string): Promise<Candidate> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not candidateId");

    const findCandidate: Candidate = await this.candidate.findOne({ user: userId }).populate('user');
    if (!findCandidate) throw new HttpException(409, "You're not candidate");

    return findCandidate;
  }

  public async createCandidate(candidateData: CreateCandidateDto): Promise<Candidate> {
    if (isEmpty(candidateData)) throw new HttpException(400, "You're not candidateData");

    const findCandidateByUserId = await await this.candidate.findOne({ user: candidateData.userId });
    if (findCandidateByUserId) throw new HttpException(409, `You're user_id ${candidateData.userId} already exists`);

    const findUser = await this.userService.findUserById(candidateData.userId);
    if (!findUser) throw new HttpException(409, "You're not user");
    const createCandidate = await this.candidate.create({ ...candidateData });
    return createCandidate;
  }

  public async updateCandidate(candidateId: string, candidateData: CreateCandidateDto): Promise<Candidate> {
    if (isEmpty(candidateData)) throw new HttpException(400, "You're not candidateData");

    const updateCandidateById = await this.candidate.findByIdAndUpdate(candidateId, { ...candidateData }, { new: true, upsert: true });
    if (!updateCandidateById) throw new HttpException(409, "You're not candidate");
    return updateCandidateById;
  }

  public async deleteCandidate(candidateId: string): Promise<Candidate> {
    const deleteCandidateById: Candidate = await this.candidate.findByIdAndDelete(candidateId);
    if (!deleteCandidateById) throw new HttpException(409, "You're not candidate");

    return deleteCandidateById;
  }
}

export default CandidateService;
