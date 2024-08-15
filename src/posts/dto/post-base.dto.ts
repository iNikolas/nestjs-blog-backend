import { ApiProperty } from '@nestjs/swagger';

export class PostBaseDto {
  @ApiProperty()
  post_id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
