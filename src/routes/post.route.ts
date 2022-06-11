import { Router } from 'express';
import PostController from '@controllers/post.controller';
import { CreatePostDto } from '@dtos/post.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class PostRoute implements Routes {
  public path = '/post';
  public router = Router();
  public postsController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.postsController.getPost);
    this.router.get(`${this.path}/:id`, this.postsController.getPostById);
    this.router.post(`${this.path}`, validationMiddleware(CreatePostDto, 'body'), this.postsController.createPost);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreatePostDto, 'body', true), this.postsController.updatePost);
    this.router.delete(`${this.path}/:id`, this.postsController.deletePost);
  }
}

export default PostRoute;
