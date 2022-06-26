import {FC} from 'react';
import {useNode} from '@craftjs/core';
import parse from 'html-react-parser';

import PrimaryNoticeSVG from 'public/icons/attentionSVG.svg';
import SecondaryNoticeSVG from 'public/icons/attentionSecondarySVG.svg';
import WarningNoticeSVG from 'public/icons/attentionWarningSVG.svg';

import * as UI from 'styles/content-block/notice';

interface IText {
  text: string | JSX.Element | JSX.Element[];
}

interface INode extends IText {
  variant: 'primary' | 'secondary' | 'warning';
}

const NOTICE_SVG = {
  primary: <PrimaryNoticeSVG width={35} height={31} />,
  secondary: <SecondaryNoticeSVG width={35} height={31} />,
  warning: <WarningNoticeSVG width={35} height={31} />,
};

const Notice: FC = () => {
  const {variant, text}: INode = useNode((node) => ({
    variant: node.data.props.variant,
    text: node.data.props.text,
  }));

  return variant && text ? (
    <UI.NoticeWrapper variant={variant}>
      <UI.IconWrapper>{NOTICE_SVG[variant]}</UI.IconWrapper>
      <UI.Text>{parse(`${text}`)}</UI.Text>
    </UI.NoticeWrapper>
  ) : null;
};

export default Notice;
