import {FC} from 'react';

import * as UI from 'styles/homeworks/homework-info';

interface IHomeworkInfo {
  questionsCount?: number;
}

const HomeworkInfo: FC<IHomeworkInfo> = ({questionsCount}) => {
  return (
    <UI.Info>
      {questionsCount && (
        <UI.InfoItem>
          <UI.InfoSubTitle>
            <UI.InfoDocumentSVG /> <b>Вопросов всего:</b> {questionsCount}
          </UI.InfoSubTitle>
        </UI.InfoItem>
      )}
    </UI.Info>
  );
};

export default HomeworkInfo;
