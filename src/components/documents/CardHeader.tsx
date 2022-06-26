import {
  formatDate,
  formatDuration,
  getNonOriginalImage,
} from 'src/helpers/common';
import {Media} from 'src/media-styles';
import {DOCUMENT_TYPE, DATE_FORMAT} from '@/constants/common';
import {getDeclension} from '@/helpers/common';
import {IDuration} from '@/types/common';
import {ICourse} from '@/types/courses';

import {IconsGroup} from 'src/components/common/logo';
import {Widget} from 'styles/common';

import CardWidgets from './CardWidgets';

import * as UI from 'styles/documents/cardHeader';

import TimeIcon from 'public/icons/TimeSVG.svg';
import CalendarIcon from 'public/icons/Calendar.svg';
import {IMedia} from '@/types/media';

interface ICardHeader {
  stock?: boolean;
  label?: string;
  type?: keyof typeof DOCUMENT_TYPE;
  startDate?: Date | null;
  publishDate?: Date | null;
  durationLabel?: IDuration;
  Course?: ICourse | null;
  imageList?: IMedia[];
}

const CardHeader: React.FC<ICardHeader> = ({
  label,
  type,
  startDate,
  publishDate,
  durationLabel,
  Course,
  imageList,
}) => {
  const isLesson = type === 'DOCUMENT_TYPE_LESSON';
  const isArticle = type === 'DOCUMENT_TYPE_ARTICLE';
  const isNews = type === 'DOCUMENT_TYPE_NEWS';
  const isWebinar = type === 'DOCUMENT_TYPE_WEBINAR';
  const isCourse = type === 'DOCUMENT_TYPE_COURSE';
  const isLive = type === 'DOCUMENT_TYPE_LIVE';
  const isVideo = type === 'DOCUMENT_TYPE_EXTERNAL_VIDEO';
  const isFile = type === 'DOCUMENT_TYPE_FILE';

  const externalEntityLabel = isVideo || isFile || isArticle || isNews;

  const {
    studentsCount,
    learnDuration,
    Threads,
    imageList: CourseImageList,
  } = Course || {};

  const courseStartDate = Threads?.[0]?.startSubmissionDate;

  const imagePath = getNonOriginalImage(isCourse ? CourseImageList : imageList);

  return (
    <UI.UIHeader>
      <UI.ImageWrapper>
        <UI.ImageUI
          src={imagePath ? imagePath : '/images/documentTest.jpg'}
          alt='document image'
          layout='responsive'
          width={280}
          height={160}
          priority
        />
        <CardWidgets label={label} type={type} Course={Course} />
      </UI.ImageWrapper>
      <Media greaterThan='xs'>
        <UI.DesktopTimeWrapper>
          <>
            {externalEntityLabel && (
              <UI.TimeDataInfo>
                <Widget $content fontSize='10px'>
                  {type && DOCUMENT_TYPE[type]}
                </Widget>
              </UI.TimeDataInfo>
            )}
            {(isWebinar || isLive || isCourse) && startDate && (
              <UI.TimeDataInfo>
                <UI.IconsGroupWrapper>
                  <CalendarIcon width={20} height={20} />
                </UI.IconsGroupWrapper>
                <UI.TextUI>
                  {formatDate(startDate, DATE_FORMAT.primary)}
                </UI.TextUI>
                <UI.TextUI>Старт</UI.TextUI>
              </UI.TimeDataInfo>
            )}

            {isLesson && (
              <UI.TimeDataInfo>
                <UI.IconsGroupWrapper>
                  <CalendarIcon width={20} height={20} />
                </UI.IconsGroupWrapper>
                <UI.TextUI>Доступно</UI.TextUI>
              </UI.TimeDataInfo>
            )}

            {(isWebinar || isLive) && (
              <UI.TimeDataInfo>
                <UI.TextUI>
                  До начала:<UI.TimeLabel>22:07:21</UI.TimeLabel>
                </UI.TextUI>
              </UI.TimeDataInfo>
            )}

            {isCourse && courseStartDate && (
              <UI.TimeDataInfo>
                <UI.IconsGroupWrapper>
                  <CalendarIcon width={20} height={20} />
                </UI.IconsGroupWrapper>
                <UI.TextUI>
                  {formatDate(courseStartDate, DATE_FORMAT.primary)}
                </UI.TextUI>
                <UI.TextUI>Старт</UI.TextUI>
              </UI.TimeDataInfo>
            )}
          </>

          <>
            {(isArticle || isNews) && publishDate && (
              <UI.TimeDataInfo>
                <UI.IconsGroupWrapper>
                  <CalendarIcon width={20} height={20} />
                </UI.IconsGroupWrapper>
                <UI.TextUI>
                  {formatDate(publishDate, DATE_FORMAT.primary)}
                </UI.TextUI>
              </UI.TimeDataInfo>
            )}

            {isCourse &&
              learnDuration &&
              Object.entries(learnDuration).some(
                (item) => item[0] !== '__typename' && item[1] !== null,
              ) && (
                <UI.TimeDataInfo>
                  <UI.IconsGroupWrapper>
                    <TimeIcon width={20} height={20} />
                  </UI.IconsGroupWrapper>
                  <UI.TextUI>{formatDuration(learnDuration)}</UI.TextUI>
                </UI.TimeDataInfo>
              )}
          </>

          <>
            {(isArticle || isNews || isLesson || isLive || isVideo) &&
              durationLabel &&
              Object.entries(durationLabel).some(
                (item) => item[0] !== '__typename' && item[1] !== null,
              ) && (
                <UI.TimeDataInfo>
                  <UI.IconsGroupWrapper>
                    <TimeIcon width={20} height={20} />
                  </UI.IconsGroupWrapper>
                  <UI.TextUI>{formatDuration(durationLabel)}</UI.TextUI>
                </UI.TimeDataInfo>
              )}
            {isCourse && !!studentsCount && (
              <UI.TimeDataInfo>
                <UI.IconsGroupWrapper>
                  <IconsGroup
                    groupListSize={groupListSize}
                    iconsSizes={iconsSizes}
                    // iconsList={iconsList}
                  />
                </UI.IconsGroupWrapper>
                <UI.TextUI>{studentsCount}</UI.TextUI>
                <UI.TextUI>
                  {getDeclension(
                    ['участник', 'участника', 'участников'],
                    studentsCount,
                  )}
                </UI.TextUI>
              </UI.TimeDataInfo>
            )}
          </>
        </UI.DesktopTimeWrapper>
      </Media>
    </UI.UIHeader>
  );
};

const groupListSize = {width: 40, height: 20};
const iconsSizes = {width: 20, height: 20};

export default CardHeader;
