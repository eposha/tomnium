import Link from 'next/link';

import {IHomework} from '@/types/homework';
import {HOMEWORK_TYPES} from '@/constants/homework';

import {Widget} from 'styles/common';
import {media} from 'styles/media';
import styled from 'styled-components';
import {HomeworkType} from 'src/graphql.schema';

const HomeworksList = styled.div`
  display: flex;
  gap: 5px;

  ${media.greaterThan('xs')`
    display: flex;
    width: 120px;
    flex-wrap: wrap;
  `}
`;

const Homework = styled(Widget)`
  font-size: 10px;
  font-weight: 500;
  line-height: 11px;
  height: 20px;
  & > * {
    color: ${({theme}) => theme.colors.primary};
  }
`;

interface IHomeworkChip {
  homeworks: IHomework[];
}

const HomeworkList: React.FC<IHomeworkChip> = ({homeworks}) => {
  const {HomeworkTypeNoHomework} = HomeworkType;
  return (
    <HomeworksList>
      {homeworks
        ?.filter(({type}) => type !== HomeworkTypeNoHomework)
        ?.map(({id, type}) => (
          <Homework key={id}>
            <Link href='#'>
              <a>{HOMEWORK_TYPES[type]}</a>
            </Link>
          </Homework>
        ))}
    </HomeworksList>
  );
};

export default HomeworkList;
