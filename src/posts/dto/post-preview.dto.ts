import { PostBaseDto } from './post-base.dto';
import { PostMetaDto } from './post-meta.dto';

export class PostPreviewDto extends PostBaseDto {
  meta: PostMetaDto | null;
}
