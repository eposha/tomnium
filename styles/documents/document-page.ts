import styled, {keyframes} from 'styled-components';
import {Text} from 'styles/common';
import {media} from 'styles/media';

export const DocumentWrapper = styled.div`
  ${media.greaterThan('xs')`
    display: flex;
    padding: 30px 0 80px;
  `}
`;

export const SideNavigation = styled.div`
  margin-right: 20px;
  padding: 10px;
  width: 180px;
  min-width: 180px;
  height: 100%;
  min-height: 750px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.05);
  border-radius: 5px;
`;

export const Main = styled.main`
  width: 100%;
`;

export const gradient = keyframes`
0% {
  background-position: 80% 0%;
}
50% {
  background-position: 20% 100%;
}
100% {
  background-position: 80% 0%;
}
`;

export const HeroWrapper = styled.div<{
  imageMob?: string | null;
  imageWeb?: string | null;
}>`
  width: 100vw;
  margin-left: -10px;
  ${({imageMob}) => ` 
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${
        imageMob ? `${imageMob}` : '/images/courses/course_mob.jpg'
      }) no-repeat center;
  `}
  background-size: cover;

  ${media.greaterThan('xs')`
    width: auto;
    margin: 0;
    border-radius: 5px;
    background: linear-gradient(
          149deg,
          rgba(24, 187, 156, 1) 0%,
          rgba(106, 57, 175, 1) 42%,
          rgba(187, 24, 148, 1) 72%,
          rgba(115, 53, 134, 1) 100%
        );
    animation: ${gradient} 10s infinite linear;
    background-size: 400%;

    ${
      //@ts-ignore
      ({imageWeb}) =>
        imageWeb
          ? `
        background: url(${imageWeb});
        `
          : `
        background: linear-gradient(
          149deg,
          rgba(24, 187, 156, 1) 0%,
          rgba(106, 57, 175, 1) 42%,
          rgba(187, 24, 148, 1) 72%,
          rgba(115, 53, 134, 1) 100%
        );
      `
    } 
  `}
`;

export const Hero = styled.div`
  padding: 10px;
  min-height: 500px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  ${media.greaterThan('xs')`
    min-height: 350px;
    padding: 20px;
  `}
`;

export const HeroMain = styled.div`
  ${media.greaterThan('xs')`
    display: flex;
    justify-content: space-between;
  `}
`;

export const HeroText = styled.div`
  ${media.greaterThan('xs')`
    margin-right: 48px;
  `}
`;

export const HeroFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.greaterThan('xs')`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
  `}
`;

export const Title = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  margin: 20px 0 10px;
`;

export const Description = styled.p`
  max-width: 580px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin: 0;
`;

export const AuthorsWrapper = styled.div`
  margin-bottom: 38px;
  ${media.greaterThan('xs')`
    max-width: 210px;
  `}
`;

export const AuthorsHeading = styled.span`
  display: inline-block;
  margin: 0 0 12px;
  color: #fff;
`;

export const AuthorsList = styled.div`
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const HeroFooterText = styled(Text)`
  color: white;
  span {
    font-weight: 700;
    color: white;
  }
`;

export const HeroFooterContainer = styled.div`
  flex-shrink: 0;
`;
