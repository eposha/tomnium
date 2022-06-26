import styled from 'styled-components';

export const ContainerWithCustomScroll = styled.div<{
  height?: string;
  maxHeight?: string;
}>`
  flex-grow: 1;
  overflow-y: auto;
  height: ${({height}) => height || '100%'};
  max-height: ${({maxHeight}) => maxHeight || 'auto'};
  padding-right: 12px;
  box-sizing: border-box;

  //style scrollbar in FIREFOX
  scrollbar-color: ${({theme}) => theme.colors.common.jordyBlue};
  ${({theme}) =>
    theme.colors.common.whiteGrey}; /* «slider color / scrollbar bar color» */
  scrollbar-width: thin;

  //style scrollbar in other browser
  &::-webkit-scrollbar {
    width: 1px;
    background-color: ${({theme}) => theme.colors.common.whiteGrey};
  }

  /* slider color */
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.common.jordyBlue};
    border-radius: 1px;
    &:hover {
      background-color: ${({theme}) => theme.colors.common.blueberry};
    }
  }

  /* arrows */
  &::-webkit-scrollbar-button:vertical:start:decrement {
    display: none;
  }
  &::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
  }
`;
