import {COOPERATION_SETTING, SETTING} from '@/constants/settings';
import {filterFooterLinks} from '@/helpers/common';
import Link from 'next/link';
import {FC, Fragment} from 'react';

import {Title, CooperationLink} from 'styles/footer-navigation';

interface ICooperationProps {
  footerLinks?: {name: string; link: string}[];
}

const Cooperation: FC<ICooperationProps> = ({footerLinks}) => {
  const cooperation = filterFooterLinks(footerLinks, COOPERATION_SETTING);
  return (
    <div>
      <Title>Сотрудничество</Title>
      {cooperation?.map(({name, link}) => (
        <Fragment key={SETTING[name as keyof typeof SETTING]}>
          <Link href={link} passHref>
            <CooperationLink>
              {SETTING[name as keyof typeof SETTING]}
            </CooperationLink>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default Cooperation;
