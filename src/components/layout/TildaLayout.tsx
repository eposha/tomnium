import {FC} from 'react';
import {TildaLayoutUI} from 'styles/tilda/tilda';

interface ITildaLayout {
  children: React.ReactNode;
}

const TildaLayout: FC<ITildaLayout> = ({children}) => (
  <TildaLayoutUI>{children}</TildaLayoutUI>
);

export default TildaLayout;
