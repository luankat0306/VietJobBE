import { CreatePostDto } from '@dtos/post.dto';
import { HttpException } from '@exceptions/HttpException';
import { Post } from '@interfaces/post.interface';
import postModel from '@models/post.model';
import { isEmpty, removeEmpty } from '@utils/util';
import UserService from './users.service';

class PostService {
  public post = postModel;
  public userService = new UserService();

  public async findAllPost({
    limit = 10,
    page = 1,
    ...query
  }: {
    page?: number;
    limit?: number;
    [key: string]: any;
  }): Promise<{ data: { data: Post[]; page: number; totalPage: number }; message: string }> {
    limit = +limit;
    page = +page;

    const post: Post[] = await this.post
      .find(
        removeEmpty({
          title: { $regex: query.title ?? '', $options: 'i' },
          // provinces: { $regex: query.province ?? '', $options: 'i' },
          // careers: { $regex: query.career ?? '', $options: 'i' },
          provinces: query.province,
          careers: query.career,
          ...query,
        }),
      )
      .sort({
        createAt: -1,
      })
      .skip(limit * page - limit)
      .limit(limit)
      .lean()
      .populate({
        path: 'employer',
        populate: {
          path: 'user',
        },
      })
      .exec();
    return {
      data: {
        data: post,
        page,
        totalPage: await this.post
          .find(
            removeEmpty({
              title: { $regex: query.title ?? '', $options: 'i' },
              provinces: query.province ?? undefined,
              careers: query.career ?? undefined,
              ...query,
            }),
          )
          .lean()
          .count(),
      },
      message: 'findAll',
    };
  }

  public async findPostById(postId: string): Promise<Post> {
    if (isEmpty(postId)) throw new HttpException(400, "You're not postId");

    const findPost: Post = await this.post.findOne({ _id: postId }).populate({
      path: 'employer',
      populate: {
        path: 'user',
      },
    });
    if (!findPost) throw new HttpException(409, "You're not post");

    return findPost;
  }

  public async createPost(postData: CreatePostDto): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, "You're not postData");
    const { employerId, ...rest } = postData;

    const createPost = await this.post.create({ ...rest, employer: employerId });
    return createPost;
  }

  public async updatePost(postId: string, postData: CreatePostDto): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, "You're not postData");

    const { employerId, ...rest } = postData;
    const updatePostById = await this.post.findByIdAndUpdate(postId, {
      ...rest,
      employer: employerId,
      deadline: new Date(postData.deadline),
    });
    if (!updatePostById) throw new HttpException(409, "You're not post");
    return updatePostById;
  }

  public async deletePost(postId: string): Promise<Post> {
    const deletePostById: Post = await this.post.findByIdAndDelete(postId);
    if (!deletePostById) throw new HttpException(409, "You're not post");

    return deletePostById;
  }
}

export default PostService;
