import {TColors} from 'styles/_variables';
import * as UI from 'styles/courses/course-progress-bar';

interface IProgressLabelProps {
  title: string;
  progress?: number;
  color: TColors;
}

const ProgressLabel: React.FC<IProgressLabelProps> = ({
  progress,
  title,
  color,
}) => (
  <UI.ProgressLabel>
    <UI.ProgressText>
      {title} {progress}%
    </UI.ProgressText>
    <UI.ProgressBar width='220px'>
      <UI.ProgressInner progress={progress} color={color} />
    </UI.ProgressBar>
  </UI.ProgressLabel>
);

export default ProgressLabel;
