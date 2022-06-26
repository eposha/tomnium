import {FC} from 'react';
//no delete
// import useTildaConfig from 'src/hooks/tilda/useTildaConfig';

import InnerHTML from 'dangerously-set-html-content';

interface ITildaComponent {
  tildaHtml: string;
  reRender?: object;
}

const TildaComponent: FC<ITildaComponent> = ({tildaHtml}) => {
  // useTildaConfig();
  // const html = tildaHtml.replace(
  //   'https://tech.womaninsight.club/scripts/slashRemove.js',
  //   '',
  // );
  return <InnerHTML html={tildaHtml} />;
};

export default TildaComponent;
