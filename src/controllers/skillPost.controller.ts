import { NextFunction, Request, Response } from 'express';
import { CreateSkillPostDto } from '@dtos/skillPost.dto';
import { SkillPost } from '@interfaces/skillPost.interface';
import SkillPostService from '@services/skillPost.service';

class SkillPostController {
  public skillPostService = new SkillPostService();

  public getSkillPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllSkillPostData: SkillPost[] = await this.skillPostService.findAllSkillPost();

      res.status(200).json({ data: findAllSkillPostData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getSkillPostById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillPostId: string = req.params.id;
      const findOneSkillPostData: SkillPost = await this.skillPostService.findSkillPostById(skillPostId);

      res.status(200).json({ data: findOneSkillPostData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createSkillPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillPostData: CreateSkillPostDto = req.body;
      const createSkillPostData: SkillPost = await this.skillPostService.createSkillPost(skillPostData);

      res.status(201).json({ data: createSkillPostData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSkillPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillPostId: string = req.params.id;
      const skillPostData: CreateSkillPostDto = req.body;
      const updateSkillPostData: SkillPost = await this.skillPostService.updateSkillPost(skillPostId, skillPostData);

      res.status(200).json({ data: updateSkillPostData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSkillPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skillPostId: string = req.params.id;
      const deleteSkillPostData: SkillPost = await this.skillPostService.deleteSkillPost(skillPostId);

      res.status(200).json({ data: deleteSkillPostData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default SkillPostController;
