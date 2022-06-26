import styled from 'styled-components';
import {media} from 'styles/media';
import {Text} from 'styles/common';
import {DOCUMENT_TYPE} from '@/constants/common';
import {ICourse} from '@/types/courses';

const Description = styled(Text)`
  min-height: 40px;
  margin: 0 0 10px;
  ${media.greaterThan('xs')`
    min-height: 80px;
    -webkit-line-clamp: 6;
  `}
`;

interface ICardDescription {
  title?: string;
  description?: string;
  Course?: ICourse | null;
  type?: keyof typeof DOCUMENT_TYPE;
}

const CardDescription: React.FC<ICardDescription> = ({
  title,
  description,
  Course,
  type,
}) => {
  const isCourse = type === 'DOCUMENT_TYPE_COURSE';

  return (
    <>
      {isCourse && Course?.title ? (
        <Text margin={'0 0 10px 0'} $title>
          {Course?.title}
        </Text>
      ) : (
        title && (
          <Text margin={'0 0 10px 0'} $title>
            {title}
          </Text>
        )
      )}
      {isCourse && Course?.description ? (
        <Description $description lineClamp={3}>
          {Course?.description}
        </Description>
      ) : (
        description && (
          <Description $description lineClamp={3}>
            {description}
          </Description>
        )
      )}
    </>
  );
};

export default CardDescription;
