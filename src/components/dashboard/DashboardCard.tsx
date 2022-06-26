import {FC} from 'react';
import * as UI from 'styles/dashboard/dashboard-card';

interface DashboardCardProps {
  title: string;
  percent?: number;
  quantity?: number;
}

const DashboardCard: FC<DashboardCardProps> = ({title, percent, quantity}) => {
  return (
    <UI.CardContainer>
      <UI.FlexContainer>
        <UI.ProgressCircle>
          <UI.ProgressText>
            {percent || quantity}
            {percent && <UI.Span>%</UI.Span>}
          </UI.ProgressText>
          <UI.ProgressSVG percent={percent}>
            <UI.Circle></UI.Circle>
          </UI.ProgressSVG>
        </UI.ProgressCircle>
        <UI.CardTitle>{title}</UI.CardTitle>
      </UI.FlexContainer>
    </UI.CardContainer>
  );
};

export default DashboardCard;
