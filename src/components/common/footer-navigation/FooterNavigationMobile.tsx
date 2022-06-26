import Image from 'next/image';
import {MediaIconsWrapperMobile} from 'styles/footer-navigation';
import Policy from './Policy';
import {FooterNavWrapper} from 'styles/footer-navigation';
import {mediaIconsList} from './GlobalOption';
import {useDirectories} from '@/graph-hooks/directories';
import {useMemo} from 'react';

const FooterNavigationMobile = () => {
  const {directories} = useDirectories();

  const settingOptions = useMemo(
    () =>
      directories?.Settings &&
      Object.entries(directories?.Settings)
        .filter((setting) => setting[0] !== '__typename')
        .map((setting) => ({name: setting[0], link: setting[1]})),
    [directories?.Settings],
  );

  return (
    <FooterNavWrapper mobile>
      <MediaIconsWrapperMobile>
        {mediaIconsList.map(({path, link}) => (
          <a href={link} key={path} target='__blank' rel='noopener noreferrer'>
            <Image
              key={path}
              src={path}
              width={13}
              height={15}
              alt={'media icon'}
            />
          </a>
        ))}
      </MediaIconsWrapperMobile>
      <Policy mobile footerLinks={settingOptions} />
    </FooterNavWrapper>
  );
};

export default FooterNavigationMobile;
