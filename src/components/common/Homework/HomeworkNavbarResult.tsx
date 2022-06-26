import {FC} from 'react';

import * as UI from 'styles/homeworks/homework-navbar-result';

interface IHomeworkNavbarResults {
  score?: number;
  maxScore?: number;
  duration?: string;
}

const HomeworkNavbarResults: FC<IHomeworkNavbarResults> = ({
  score,
  maxScore,
  duration,
}) => {
  return (
    <UI.NavbarResultContainer>
      <UI.NavbarResultItem>Общее время: {duration}</UI.NavbarResultItem>
      <UI.NavbarResultItem>
        {score} баллов из {maxScore}
      </UI.NavbarResultItem>
    </UI.NavbarResultContainer>
  );
};

export default HomeworkNavbarResults;
