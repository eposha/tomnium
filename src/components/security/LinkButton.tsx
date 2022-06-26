import Link from 'next/link';
import {FC} from 'react';
import * as UI from 'styles/user/common';
import Image from 'next/image';

interface LinkButtonPropsType {
  href: string;
  imgSrc: string;
  text?: string;
  name?: string;
  subdata?: string;
}

const LinkButton: FC<LinkButtonPropsType> = ({
  href = '#',
  imgSrc,
  text,
  name,
  subdata,
}) => {
  return (
    <Link href={href} passHref>
      <UI.BtnLink name={name}>
        <UI.BtnLinkInner>
          <UI.BtnLinkImg name={name}>
            <Image src={imgSrc} width='100%' height='100%' alt='link' />
          </UI.BtnLinkImg>
          {name ? (
            <UI.AuthorizedData>
              <UI.AuthorizedName>{name}</UI.AuthorizedName>
              <UI.AuthorizedSubData>{subdata}</UI.AuthorizedSubData>
            </UI.AuthorizedData>
          ) : (
            text
          )}
        </UI.BtnLinkInner>
      </UI.BtnLink>
    </Link>
  );
};

export default LinkButton;
