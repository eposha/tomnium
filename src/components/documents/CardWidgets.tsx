import {DOCUMENT_TYPE} from '@/constants/common';
import {Media} from 'src/media-styles';
import {IconsGroup} from 'src/components/common/logo';
import {getDeclension} from '@/helpers/common';
import {ICourse} from '@/types/courses';

import * as UI from 'styles/documents/cardWidgets';

interface ICardWidget {
  label?: string;
  type?: keyof typeof DOCUMENT_TYPE;
  Course?: ICourse | null;
}

const CardWidgets: React.FC<ICardWidget> = ({label, type, Course}) => {
  const isCourse = type === 'DOCUMENT_TYPE_COURSE';
  const isArticle = type === 'DOCUMENT_TYPE_ARTICLE';
  const isNews = type === 'DOCUMENT_TYPE_NEWS';
  const isVideo = type === 'DOCUMENT_TYPE_EXTERNAL_VIDEO';
  const isFile = type === 'DOCUMENT_TYPE_FILE';

  const innerEntityLabel = !(isArticle || isVideo || isNews || isFile);
  const {studentsCount, label: courseLabel} = Course || {};
  return (
    <>
      {isCourse && courseLabel ? (
        <UI.CardLabelUI $isPromo>{courseLabel}</UI.CardLabelUI>
      ) : (
        label && <UI.CardLabelUI $isPromo>{label}</UI.CardLabelUI>
      )}

      {innerEntityLabel && (
        <Media greaterThan='xs'>
          <UI.WidgetBottomLeft
            top={'calc(100% - 28px)'}
            left={'5px'}
            $content
            fontSize={'10px'}>
            {type && DOCUMENT_TYPE[type]}
          </UI.WidgetBottomLeft>
        </Media>
      )}
      <Media at='xs'>
        <UI.WidgetBottomLeft
          top={'calc(100% - 28px)'}
          left={'5px'}
          $content
          fontSize={'10px'}>
          {type && DOCUMENT_TYPE[type]}
        </UI.WidgetBottomLeft>
      </Media>

      <UI.HiddenBottomRight at={'xs'}>
        {isCourse && studentsCount && (
          <UI.IconsGroupWrapper>
            <IconsGroup
              groupListSize={groupListSize}
              iconsSizes={iconsSizes}
              //@ts-ignore
              iconsList={iconsList}
            />
            <UI.WidgetMargin $content fontSize='10px'>
              {studentsCount}{' '}
              {getDeclension(
                ['участник', 'участника', 'участников'],
                studentsCount,
              )}
            </UI.WidgetMargin>
          </UI.IconsGroupWrapper>
        )}
      </UI.HiddenBottomRight>
    </>
  );
};

const groupListSize = {width: 40, height: 20};
const iconsSizes = {width: 20, height: 20};
const iconsList = [
  [{path: '/icons/test-icons/avatar.png'}],
  [{path: '/icons/test-icons/author1.png'}],
  [{path: '/icons/test-icons/author2.png'}],
];

export default CardWidgets;
