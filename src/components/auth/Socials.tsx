import Image from 'next/image';

import {SocialIconsWrapper, SocialIcon} from 'styles/auth/common';

const Socials = () => {
  return (
    <>
      <SocialIconsWrapper>
        <SocialIcon type={'button'}>
          <Image
            src='/icons/FacebookIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </SocialIcon>
        <SocialIcon type={'button'}>
          <Image
            src='/icons/InstagramIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </SocialIcon>
        <SocialIcon type={'button'}>
          <Image
            src='/icons/GoogleIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </SocialIcon>
      </SocialIconsWrapper>
    </>
  );
};

export default Socials;
