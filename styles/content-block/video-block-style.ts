import ContentEditable from 'react-contenteditable';
import RemoveSvg from 'public/icons/RemoveIcon.svg';
import EditSvg from 'public/icons/Edit.svg';

import styled from 'styled-components';
import {media} from 'styles/media';

export const ElementWrapper = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;

  ${media.greaterThan('xs')`
  margin-top: 50px;
`};
`;

export const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d3e2ff;

  ${media.greaterThan('xs')`
    flex-direction: row;
  `};
`;

export const VideoPlayer = styled.div<{$isMarkers?: boolean}>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
  width: 100%;

  ${media.greaterThan('xs')`
      ${
        //@ts-ignore
        ({$isMarkers}) =>
          $isMarkers
            ? `  
        min-width: 450px;
        min-height: 262px;
        max-width: 450px;
        max-height: 262px;`
            : `    
        width: 100%;`
      };
    `};
`;

export const MarkersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-height: 262px;
  background-color: #fff;
`;

export const MarkersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export const MarkerTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
`;

export const Marker = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 36px;
  min-height: 36px;
  cursor: pointer;
`;

export const MarkerTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 0 8px;
  line-height: 20px;
  font-weight: 500;
  font-size: 10px;
  border: 1px solid #d3e2ff;
  border-radius: 5px;
  color: #516ff6;
`;

export const MarkerText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const Marks = styled.div`
  padding: 0 10px 10px 10px;
  max-height: 350px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: auto;
`;

export const MarkFieldWrapper = styled.div`
  position: sticky;
  top: 0;
  padding-top: 10px;
  background: #fff;
`;

export const MarkField = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  background: #f4f6fa;
  border-radius: 5px;
  overflow: hidden;
`;

export const MarkInputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  width: 100%;
`;

export const MarkInputLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 20px;
  font-size: 10px;
  line-height: 12px;
  color: #516ff6;
  background: #d3e2ff;
  border-radius: 5px;
`;

export const MarkInput = styled.input`
  width: 100%;
  margin-left: 8px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 12px;
    line-height: 14px;
    color: #bcbcbc;
  }
`;

export const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: 40px;
  background: #516ff6;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`;

export const MarkWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 15px;
  padding: 0 10px;
`;

export const MarkLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 0 8px;
  min-width: 61px;
  max-height: 20px;
  line-height: 20px;
  font-weight: 500;
  font-size: 10px;
  border: 1px solid #d3e2ff;
  border-radius: 5px;
  color: #516ff6;

  cursor: pointer;
`;

export const MarkInfo = styled(ContentEditable)`
  margin-left: 10px;
  padding-top: 3px;
  width: 100%;
  max-width: 560px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  border: none;
  outline: none;
`;

export const MarkButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: auto;
`;

export const RemoveIcon = styled(RemoveSvg)`
  cursor: pointer;
`;

export const EditIcon = styled(EditSvg)<{$isDisabled: boolean}>`
  margin-left: 10px;

  g {
    stroke: ${({$isDisabled}) => ($isDisabled ? '#bcbcbc;' : '#516ff6;')};
  }

  cursor: ${({$isDisabled}) => ($isDisabled ? 'default;' : 'pointer;')};
`;
