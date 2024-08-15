import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostMetaDto {
  @ApiProperty()
  @IsString()
  post_meta_id: string;

  @ApiProperty()
  @IsString()
  post_id: string;

  @ApiProperty()
  @IsString()
  short_desc: string;

  @ApiProperty()
  @IsString()
  featured_img: string;
}
