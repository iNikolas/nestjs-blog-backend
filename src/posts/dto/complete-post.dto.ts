import { PostMetaDto } from './post-meta.dto';
import { SinglePostDto } from './single-post.dto';

export class CompletePostDto extends SinglePostDto {
  meta: PostMetaDto | null;
}
