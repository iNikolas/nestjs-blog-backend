import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Length } from 'class-validator';

export class PostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My First Post',
    minLength: 5,
    maxLength: 100,
  })
  @IsString()
  @Length(5, 100)
  title: string;

  @ApiProperty({
    description: 'A short description of the post',
    example: 'This is a brief overview of the post.',
    maxLength: 250,
  })
  @IsString()
  @Length(0, 250)
  shortDesc: string;

  @ApiProperty({
    description: 'The URL of the featured image',
    example: 'https://example.com/featured.jpg',
  })
  @IsUrl()
  featuredImg: string;

  @ApiProperty({
    description: 'The URL of the post image',
    example: 'https://example.com/post.jpg',
  })
  @IsUrl()
  postImg: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is the full content of the post.',
    minLength: 50,
    maxLength: 5000,
  })
  @IsString()
  @Length(50, 5000)
  content: string;
}
