import {ReactNode} from 'react';
import * as UI from 'styles/homeworks/homework-locked';

export interface HomeworkLockedProps {
  children: ReactNode;
}

const HomeworkLocked = ({children}: HomeworkLockedProps) => {
  return (
    <UI.HomeworkLockedContainer>
      <UI.LockedIcon />
      {children}
    </UI.HomeworkLockedContainer>
  );
};

export default HomeworkLocked;
