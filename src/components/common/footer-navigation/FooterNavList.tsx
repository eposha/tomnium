import {SETTING} from '@/constants/settings';
import Link from 'next/link';
import {
  FooterNavListWrapper,
  NavLink,
  NavList,
  Title,
} from 'styles/footer-navigation';

type Title = 'О нас' | 'Связаться с нами' | 'Наши бренды';

interface IFooterNavList {
  title: Title;
  footerLinks?: {name: string; link: string}[];
}

const FooterNavList: React.FC<IFooterNavList> = ({title, footerLinks}) => {
  return (
    <FooterNavListWrapper>
      <Title>{title}</Title>
      <NavList>
        {footerLinks?.map(({name, link}) => (
          <Link
            key={SETTING[name as keyof typeof SETTING]}
            href={link}
            passHref>
            <NavLink>{SETTING[name as keyof typeof SETTING]}</NavLink>
          </Link>
        ))}
      </NavList>
    </FooterNavListWrapper>
  );
};

export default FooterNavList;
