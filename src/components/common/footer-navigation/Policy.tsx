import {POLICY_SETTING, SETTING} from '@/constants/settings';
import {filterFooterLinks} from '@/helpers/common';
import Link from 'next/link';
import {FC, Fragment} from 'react';
import useLocale from 'src/hooks/useLocale';

import {
  PolicyWrapper,
  CreatedAppData,
  PolicyLink,
  Empty,
  AllRight,
} from 'styles/footer-navigation';

interface PolicyPropsType {
  mobile?: boolean;
  sidebar?: boolean;
  footerLinks?: {name: string; link: string}[];
}

const Policy: FC<PolicyPropsType> = ({mobile, sidebar, footerLinks}) => {
  const locale = useLocale();
  const policy = filterFooterLinks(footerLinks, POLICY_SETTING);

  return (
    <PolicyWrapper mobile={mobile} sidebar={sidebar}>
      {!mobile && <CreatedAppData>Woman insight © 2015-2021</CreatedAppData>}
      {policy?.map(({name, link}) => (
        <Fragment key={SETTING[name as keyof typeof SETTING]}>
          <Link href={link} passHref>
            <PolicyLink sidebar={sidebar}>
              {locale.footer?.[name as keyof typeof POLICY_SETTING]}
            </PolicyLink>
          </Link>
        </Fragment>
      ))}
      {!mobile && <Empty />}
      {!mobile && <AllRight>Copyright. All Rights Reserved.</AllRight>}
      {mobile && <CreatedAppData sidebar={sidebar}>© 2015-2021</CreatedAppData>}
    </PolicyWrapper>
  );
};

export default Policy;
