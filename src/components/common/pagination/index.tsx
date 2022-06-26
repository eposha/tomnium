import {FC} from 'react';

import {useRouter} from 'next/router';

import Pagination from 'rc-pagination';

import PaginationArrowRightSVG from 'public/icons/PaginationArrowRightSVG.svg';
import JumpDotesSVG from 'public/icons/JumpDotesSVG.svg';
import styled from 'styled-components';
import PaginationStyles from 'styles/pagination';
import {IPagination} from '@/types/common';

const PaginationUI = styled(Pagination)`
  margin-left: auto;
`;

const PrevIcon = styled(PaginationArrowRightSVG)`
  width: 5px;
  height: 10px;
  transform: rotateY(180deg);
`;

interface IPaginationProps {
  pagination?: IPagination;
  activeBg?: string;
  maxItems?: number;
  customOffsetName?: string;
}

const PaginationCommon: FC<IPaginationProps> = ({
  pagination,
  activeBg = '#fff',
  maxItems,
  customOffsetName,
}) => {
  const router = useRouter();
  const {
    pathname,
    query,
    query: {offset},
  } = router;
  const {total, nextPageExists, previousPageExists} = pagination || {};

  const handlePagination = (page?: number) => {
    const queryData = {
      ...query,
      [customOffsetName ?? 'offset']: page,
    };

    if (page && page - 1 === 0) {
      customOffsetName
        ? delete (queryData as any)[customOffsetName]
        : delete queryData.offset;
    }

    router.push({
      pathname,
      query: queryData,
    });
  };

  const buttonItemRender = (
    current: number | undefined,
    type: string,
    element: any,
  ) => {
    if (type === 'prev' && previousPageExists) {
      return (
        <button
          type='button'
          onClick={() => handlePagination(current)}
          aria-label='Prev page'>
          <PrevIcon />
        </button>
      );
    }
    if (type === 'next' && nextPageExists) {
      return (
        <button
          type='button'
          onClick={() => handlePagination(current)}
          aria-label='Next page '>
          <PaginationArrowRightSVG width={5} height={10} />
        </button>
      );
    }
    return element;
  };
  return total && total > (maxItems || 10) ? (
    <>
      <PaginationStyles activeBg={activeBg} />
      <PaginationUI
        onChange={handlePagination}
        current={
          customOffsetName
            ? Number(query[customOffsetName])
            : offset
            ? +offset
            : 1
        }
        jumpNextIcon={<JumpDotesSVG width={2} height={2} />}
        jumpPrevIcon={<JumpDotesSVG width={2} height={2} />}
        total={total}
        itemRender={buttonItemRender}
      />
    </>
  ) : null;
};

export default PaginationCommon;
