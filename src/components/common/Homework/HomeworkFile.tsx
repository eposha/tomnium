import {FC} from 'react';
import * as UI from 'styles/homeworks/homework-fluent';

interface IHomeworkFileProps {
  id: number;
  onDelete: (id: number) => void;
}

const HomeworkFile: FC<IHomeworkFileProps> = ({id, onDelete}) => {
  return (
    <UI.FileContainer>
      <UI.File>
        <UI.FileSVG />
        <UI.DeleteButtonWrapper onClick={() => onDelete(id)}>
          <UI.DeleteButtonLabel>
            <UI.DeleteButtonLine rotate={45} />
            <UI.DeleteButtonLine rotate={-45} />
          </UI.DeleteButtonLabel>
        </UI.DeleteButtonWrapper>
      </UI.File>
    </UI.FileContainer>
  );
};

export default HomeworkFile;
