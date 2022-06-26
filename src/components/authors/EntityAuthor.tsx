import * as UI from 'styles/authors/entity-author';

import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {IAuthor} from '@/types/author';
import {getNonOriginalImage} from '@/helpers/common';

interface IEntityAuthorProps {
  author?: IAuthor | null;
  color?: 'dark' | 'light';
}

const EntityAuthor: React.FC<IEntityAuthorProps> = ({author, color = 'dark'}) =>
  author ? (
    <UI.Author key={author.id}>
      <UI.AuthorAvatar>
        <PrimaryAvatar
          src={getNonOriginalImage(author.avatar)}
          size={40}
          title={author.fullName}
        />
      </UI.AuthorAvatar>
      <UI.AuthorBio>
        <UI.AuthorName color={color}>{author.fullName}</UI.AuthorName>
        <UI.AuthorRegalia color={color}>{author.regalia}</UI.AuthorRegalia>
      </UI.AuthorBio>
    </UI.Author>
  ) : null;

export default EntityAuthor;
