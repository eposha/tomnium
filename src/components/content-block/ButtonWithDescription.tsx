import {useNode} from '@craftjs/core';
import Link from 'next/link';

import * as UI from 'styles/content-block/button-style';

const ButtonWithDescription = () => {
  const {
    props: {href, text, isBlank, position, description},
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <UI.ButtonWrapperDescription position={position}>
      <UI.Description>{description}</UI.Description>

      {isBlank ? (
        <UI.ButtonStyled href={href} target='_blank'>
          <UI.Text>{text}</UI.Text>
        </UI.ButtonStyled>
      ) : (
        <Link href={href} passHref>
          <UI.ButtonStyled>
            <UI.Text>{text}</UI.Text>
          </UI.ButtonStyled>
        </Link>
      )}
    </UI.ButtonWrapperDescription>
  );
};

export default ButtonWithDescription;
