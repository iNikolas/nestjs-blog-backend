import { PostBaseDto } from './post-base.dto';
import { PostContentDto } from './post-content.dto';

export class SinglePostDto extends PostBaseDto {
  content: PostContentDto | null;
}
