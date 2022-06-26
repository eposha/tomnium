import styled from 'styled-components';
import {media} from 'styles/media';

export const BannerWrapper = styled.div<{src: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 500px;
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  padding: 10px 10px 30px 10px;

  & * {
    color: inherit;
  }

  ${media.greaterThan('md')`
    min-height: 290px;
    flex-direction: row;
    padding: 20px 30px 20px 20px;
  `}
`;

export const Container = styled.div<{mw: number; flex?: boolean}>`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  align-items: center;
  width: 100%;
  max-width: ${({mw}) => `${mw}px`};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme}) => theme.colors.common.blueLight};
  border-radius: 5px;
  padding: 4px 10px;
  margin-bottom: 10px;

  ${media.greaterThan('md')`
    background-color: ${({theme}) => theme.colors.common.blueberry};
  `}
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 30px 0;
`;

export const Span = styled.span<{fw: number; mb: number}>`
  display: block;
  font-size: 12px;
  font-weight: ${({fw}) => `${fw}px`};
  margin-bottom: ${({mb}) => `${mb}px`};
`;

export const OpacitySpan = styled.span`
  display: block;
  height: 20px;
  font-size: 10px;
  font-weight: 500;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 190px;
`;

export const Image = styled.img.attrs(({src}) => ({src}))``;

export const AuthorImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Div = styled.div``;

export const BannerLink = styled.a`
  display: block;
  min-width: 160px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 5px;
  padding: 10px;
  margin: 40px auto 0;
`;
