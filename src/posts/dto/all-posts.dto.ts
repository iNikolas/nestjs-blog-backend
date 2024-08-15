import { PaginatedDto } from 'src/common/dto/paginated.dto';
import { PostPreviewDto } from './post-preview.dto';

export class AllPostsDto extends PaginatedDto {
  data: Array<PostPreviewDto>;
}
