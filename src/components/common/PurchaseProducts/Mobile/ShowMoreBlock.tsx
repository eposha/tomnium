import {
  HeaderShowMoreBlock,
  DefaultInnerShowMoreBlock,
  ShowButton,
  Divider,
} from 'styles/payments';
import {DownArrow, Text, UpArrow, Box} from 'styles/common';
import {useState} from 'react';

interface IProps {
  title?: string;
  defaultState?: boolean;
  render: (isShowMore: boolean) => any;
  WrapperComponent?: React.ElementType;
  Header?: React.ElementType;
  DividerComponent?: React.ElementType;
  isHeaderDivider?: boolean;
}

export const ShowMoreBlock: React.FC<IProps> = ({
  title,
  render,
  defaultState,
  WrapperComponent,
  Header,
  DividerComponent,
  isHeaderDivider = true,
}) => {
  const [isShowMore, setIsShowMore] = useState(defaultState || false);
  const changeIsShowMore = () => {
    setIsShowMore((prevState) => !prevState);
  };
  const Wrapper = WrapperComponent || DefaultInnerShowMoreBlock;
  const CustomDivider = DividerComponent || Divider;

  return (
    <Wrapper>
      <HeaderShowMoreBlock>
        {title && (
          <Text fontSize={'16px'} fontWeight={'600'} $description lineClamp={1}>
            {title}
          </Text>
        )}
        {Header && <Header />}
        <ShowButton
          isShowMore={isShowMore}
          type={'button'}
          onClick={changeIsShowMore}>
          {isShowMore ? (
            <UpArrow width={2} padding={2} color={'jordyBlue'} />
          ) : (
            <DownArrow width={2} padding={2} color={'jordyBlue'} />
          )}
        </ShowButton>
      </HeaderShowMoreBlock>
      {isHeaderDivider && (
        <Box mt={'10px'}>
          <CustomDivider />
        </Box>
      )}
      <div>{render(isShowMore)}</div>
    </Wrapper>
  );
};
