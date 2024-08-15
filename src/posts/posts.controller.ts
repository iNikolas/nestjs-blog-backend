import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { AllPostsDto } from './dto/all-posts.dto';
import { SinglePostDto } from './dto/single-post.dto';
import { PostBaseDto } from './dto/post-base.dto';
import { CompletePostDto } from './dto/complete-post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of posts' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of posts per page',
  })
  @ApiResponse({
    status: 200,
    description: 'List of posts',
    type: AllPostsDto,
  })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.postsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific post by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The unique identifier of the post',
  })
  @ApiResponse({
    status: 200,
    description: 'Post details',
    type: SinglePostDto,
  })
  @ApiResponse({ status: 404, description: 'Post not found' })
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiBody({ type: PostDto })
  @ApiResponse({
    status: 201,
    description: 'The created post',
    type: PostBaseDto,
  })
  async create(@Body() postDto: PostDto) {
    return this.postsService.create(postDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing post by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The unique identifier of the post',
  })
  @ApiBody({ type: PostDto })
  @ApiResponse({
    status: 200,
    description: 'The updated post',
    type: CompletePostDto,
  })
  @ApiResponse({ status: 404, description: 'Post not found' })
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: Partial<PostDto>,
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The unique identifier of the post',
  })
  @ApiResponse({
    status: 200,
    description: 'Post deletion confirmation',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Post not found' })
  async remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
