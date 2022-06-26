import {Box, Button, Widget} from 'styles/common';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const InnerLabels = styled.div<{$isWrap?: boolean; margin?: string}>`
  display: flex;
  justify-content: flex-start;
  flex-wrap: ${({$isWrap}) => ($isWrap ? 'wrap' : 'nowrap')};
  overflow: hidden;
  margin: ${({margin}) => margin || '10px 0'};
  & > *:not(:last-child) {
    margin-right: 7px;
  }
`;

interface IProps {
  items?: {
    id: string | number;
    title: string;
  }[];
  margin?: string;
}

export const LabelsWithShowMore: React.FC<IProps> = ({items, margin}) => {
  const [itemsToShow, setItemsToShow] = useState<number>(items?.length || 0);
  const [isWrap, setIsWrap] = useState<boolean>(false);
  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = refContainer.current;
    const containerRight = container?.getBoundingClientRect()?.right || 0;
    const children = container?.children || [];
    const countsAllItems = items?.length || 0;
    const visibleItems = [...children]?.filter((it: any) => {
      return it.getBoundingClientRect().right < containerRight;
    })?.length;
    const countToShow =
      visibleItems === countsAllItems || visibleItems < 3
        ? visibleItems
        : visibleItems - 1;
    setItemsToShow(countToShow);
  }, [items]);

  const handleShowMore = () => {
    setItemsToShow(items?.length || 0);
    setIsWrap(true);
  };

  return (
    <InnerLabels ref={refContainer} $isWrap={isWrap} margin={margin}>
      {(items || []).slice(0, itemsToShow)?.map((it) => (
        <Box key={it.id} mb={'5px'}>
          <Widget height={'20px'} $solid fontSize={'10px'}>
            {it.title}
          </Widget>
        </Box>
      ))}
      {itemsToShow < Number(items?.length) && (
        <Button $label onClick={handleShowMore} height={25}>
          Еще+{Number(items?.length) - itemsToShow}
        </Button>
      )}
    </InnerLabels>
  );
};
