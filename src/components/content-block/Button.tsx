import {useNode} from '@craftjs/core';
import Link from 'next/link';

import * as UI from 'styles/content-block/button-style';

const Button = () => {
  const {
    props: {href, text, isBlank, position},
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <UI.ButtonWrapper position={position}>
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
    </UI.ButtonWrapper>
  );
};

export default Button;
