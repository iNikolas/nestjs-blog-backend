import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PostDto } from './dto/post.dto';
import { AllPostsDto } from './dto/all-posts.dto';
import { SinglePostDto } from './dto/single-post.dto';
import { PostBaseDto } from './dto/post-base.dto';
import { CompletePostDto } from './dto/complete-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(paginationDto: PaginationDto): Promise<AllPostsDto> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;
    const take = limit;

    const posts = await this.prismaService.post.findMany({
      skip,
      take,
      include: { meta: true },
    });

    const total = await this.prismaService.post.count();

    return {
      data: posts,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<SinglePostDto> {
    const post = await this.prismaService.post.findUnique({
      where: { post_id: id },
      include: { content: true },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async create(postDto: PostDto): Promise<PostBaseDto> {
    const { title, shortDesc, featuredImg, postImg, content } = postDto;

    const existingPost = await this.prismaService.post.findFirst({
      where: { title },
    });

    if (existingPost) {
      throw new ConflictException('Post with the same title already exists');
    }

    const post = await this.prismaService.post.create({
      data: {
        title,
        meta: {
          create: {
            short_desc: shortDesc,
            featured_img: featuredImg,
          },
        },
        content: {
          create: {
            content,
            post_img: postImg,
          },
        },
      },
    });

    return post;
  }

  async update(
    id: string,
    updatePostDto: Partial<PostDto>,
  ): Promise<CompletePostDto> {
    const { title, shortDesc, postImg, content } = updatePostDto;

    const existingPost = await this.prismaService.post.findUnique({
      where: { post_id: id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    if (title && title !== existingPost.title) {
      const titleExists = await this.prismaService.post.findFirst({
        where: { title },
      });

      if (titleExists) {
        throw new ConflictException('Post with the same title already exists');
      }
    }

    const post = await this.prismaService.post.update({
      where: { post_id: id },
      data: {
        title,
        meta: {
          update: {
            short_desc: shortDesc,
            featured_img: postImg,
          },
        },
        content: {
          update: {
            content,
            post_img: postImg,
          },
        },
      },
      include: { meta: true, content: true },
    });

    return post;
  }

  async remove(id: string) {
    const existingPost = await this.prismaService.post.findUnique({
      where: { post_id: id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    await this.prismaService.post.delete({
      where: { post_id: id },
    });

    return { message: `Post with ID ${id} has been deleted` };
  }
}
