import * as UI from 'styles/learningStructure/entity-progress-bar';

interface IEntityProgressBar {
  progress: number;
  color: 'primary' | 'secondary';
}

const EntityProgressBar: React.FC<IEntityProgressBar> = ({progress, color}) => {
  return (
    <UI.Wrapper>
      <UI.ProgressBar>
        <UI.ProgressBarInner color={color} progress={progress} />
      </UI.ProgressBar>
      <UI.ProgressText>{progress}%</UI.ProgressText>
    </UI.Wrapper>
  );
};

export default EntityProgressBar;
