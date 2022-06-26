import {FC} from 'react';
import {useNode} from '@craftjs/core';
import parse from 'html-react-parser';

import * as UI from 'styles/content-block/text';

interface IText {
  text: string | JSX.Element | JSX.Element[];
}

interface INode extends IText {
  variant: 'div' | 'h1' | 'h2' | 'h3';
}

const TEXT_VARIANT = {
  div: ({text}: IText) => <UI.TextUI>{text}</UI.TextUI>,
  h1: ({text}: IText) => <UI.TitleH1>{text}</UI.TitleH1>,
  h2: ({text}: IText) => <UI.TitleH2>{text}</UI.TitleH2>,
  h3: ({text}: IText) => <UI.TitleH3>{text}</UI.TitleH3>,
};

const Text: FC = () => {
  const {variant, text}: INode = useNode((node) => ({
    variant: node.data.props.variant,
    text: node.data.props.text,
  }));

  const Element = TEXT_VARIANT[variant];

  return text && !!Element ? <Element text={parse(`${text}`)} /> : null;
};

export default Text;
