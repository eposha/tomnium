import * as UI from 'styles/homeworks/block-container';

export interface IBlockContainerProps {
  title: string;
  text: string;
  children?: any;
}

const BlockContainer = ({title, text, children}: IBlockContainerProps) => {
  return (
    <UI.Block>
      <UI.TextContainer>
        <UI.BlockTitle>{title}</UI.BlockTitle>
        <UI.BlockText>{text}</UI.BlockText>
      </UI.TextContainer>
      {children}
    </UI.Block>
  );
};

export default BlockContainer;
