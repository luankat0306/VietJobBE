import { CreateSkillPostDto } from '@dtos/skillPost.dto';
import { HttpException } from '@exceptions/HttpException';
import { SkillPost } from '@interfaces/skillPost.interface';
import skillPostModel from '@models/skillPost.model';
import { isEmpty } from '@utils/util';
import UserService from './users.service';

class SkillPostService {
  public skillPost = skillPostModel;
  public userService = new UserService();

  public async findAllSkillPost(): Promise<SkillPost[]> {
    const skillPost: SkillPost[] = await this.skillPost.find();
    return skillPost;
  }

  public async findSkillPostById(skillPostId: string): Promise<SkillPost> {
    if (isEmpty(skillPostId)) throw new HttpException(400, "You're not skillPostId");

    const findSkillPost: SkillPost = await this.skillPost.findOne({ _id: skillPostId });
    if (!findSkillPost) throw new HttpException(409, "You're not skillPost");

    return findSkillPost;
  }

  public async createSkillPost(skillPostData: CreateSkillPostDto): Promise<SkillPost> {
    if (isEmpty(skillPostData)) throw new HttpException(400, "You're not skillPostData");

    const createSkillPost = await this.skillPost.create({ ...skillPostData });
    return createSkillPost;
  }

  public async updateSkillPost(skillPostId: string, skillPostData: CreateSkillPostDto): Promise<SkillPost> {
    if (isEmpty(skillPostData)) throw new HttpException(400, "You're not skillPostData");

    const updateSkillPostById = await this.skillPost.findByIdAndUpdate(skillPostId, { ...skillPostData });
    if (!updateSkillPostById) throw new HttpException(409, "You're not skillPost");
    return updateSkillPostById;
  }

  public async deleteSkillPost(skillPostId: string): Promise<SkillPost> {
    const deleteSkillPostById: SkillPost = await this.skillPost.findByIdAndDelete(skillPostId);
    if (!deleteSkillPostById) throw new HttpException(409, "You're not skillPost");

    return deleteSkillPostById;
  }
}

export default SkillPostService;
