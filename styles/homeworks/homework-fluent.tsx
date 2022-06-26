import styled from 'styled-components';
import {Button as UIButton} from 'styles/common';
import {media} from 'styles/media';
import MediaClip from 'public/icons/MediaClip.svg';

export const FluentWrapper = styled.form`
  max-width: 780px;
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  position: relative;
`;

export const ContentBlockWrapper = styled.div`
  margin-bottom: 50px;
`;

export const Container = styled.div`
  padding: 10px;

  ${media.greaterThan('md')`
    padding: 20px;
  `}
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  ${media.greaterThan('md')`
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 33px;
`}
`;

export const Description = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  background: #fff;
  border: 1px solid #d3e2ff;
  border-radius: 5px;

  ${media.greaterThan('md')`
    margin-bottom: 50px;
    padding: 47px 40px;
`}
`;

export const DescriptionTitle = styled.div`
  margin-bottom: 10px;

  ${media.greaterThan('md')`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  `}
`;

export const DescriptionData = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${media.greaterThan('md')`
    font-size: 16px;
    line-height: 19px;
`}
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0;

  ${media.greaterThan('md')`
  font-size: 20px;
  `}
`;
export const FluentHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.common.greyLight};
  margin-bottom: 10px;
  padding-bottom: 10px;

  ${media.greaterThan('md')`    
    margin-bottom: 30px;
    padding-bottom: 15px;
  `}
`;

export const HeaderContainer = styled.div`
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 10px 0;

  ${media.greaterThan('md')`
    margin-top: 0;
  `}
`;

export const FluentTitle = styled.div`
  min-height: 19px;
  font-weight: 900;
  font-size: 16px;
`;

export const Label = styled.span`
  padding: 5px 10px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.white};
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.common.blueberry};

  ${media.greaterThan('md')`
    font-size: 14px;
    text-align: center;    
    min-width: 160px;
    padding: 7px 10px
  `}
`;

export const FluentData = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #697077;
`;

export const FluentText = styled.textarea`
  width: 100%;
  height: 50vh;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.greyDark};
  resize: none;
  margin: 0 0 10px 0;
  border: none;
  outline: ${({theme}) => theme.colors.common.greyDark};

  ${media.greaterThan('md')`
    height: 300px;    
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.colors.common.black};
  `}
`;

export const FluentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 10px;
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;

  ${media.greaterThan('md')`
    padding-left: 95px;
    `}

  &::before {
    display: none;
    position: absolute;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme}) => theme.colors.common.jordyBlue};
  }

  &::before {
    ${media.greaterThan('md')`
      content: 'Статус';
      display: block;
    `}
  }
`;

export const FluentFooterText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.jordyBlue};
`;

export const ButtonWrapper = styled.div<{jc?: string}>`
  display: flex;
  justify-content: ${({jc}) => (jc ? jc : 'end')};
  align-items: center;

  ${media.greaterThan('md')`
    position: relative;
    left: 20px;
    bottom: -20px;
    margin-left: auto;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      left: -40px;
      height: 1px;
      background: #D3E2FF;
    }
`};
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 780px;
  width: 100%;
  margin-top: 20px;
`;

export const MediaClipWrapper = styled.button.attrs({type: 'button'})`
  flex: 0 0 30px;
  margin-right: auto;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  padding: 6px 5px;

  ${media.greaterThan('md')`
    background-color: transparent;
    margin-left: auto;
    margin-right: 0;
  `}
`;

export const MediaClipLabel = styled.label.attrs(({htmlFor}) => ({htmlFor}))`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const MediaClipInput = styled.input.attrs(({ref, id}) => ({
  type: 'file',
  ref,
  id,
}))`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  appearance: none;
`;

export const MediaClipSVG = styled(MediaClip)`
  ${media.greaterThan('md')`
    path {
      stroke: ${({theme}) => theme.colors.common.blueberry};
    }
  `};
`;

export const FilesWrapper = styled.div`
  display: flex;
  gap: 4px 4px;
  margin-bottom: 20px;

  ${media.greaterThan('md')`
    flex-wrap: wrap;
    margin-bottom: 0;
  `}
`;

export const FileContainer = styled.div`
  flex: 0 0 85px;
  padding: 5px 5px 0 0;
`;

export const File = styled.div`
  flex-basis: 0 0 80px;
  padding: 12px 26px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  border-radius: 5px;
  position: relative;
`;

export const DeleteButtonWrapper = styled.button.attrs({type: 'button'})`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -17px;
  right: -16px;
`;

export const DeleteButtonLabel = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 50%;
`;

export const FileSVG = styled(MediaClipSVG)`
  path {
    stroke: ${({theme}) => theme.colors.common.blueberryLight};
  }
`;

export const DeleteButtonLine = styled.span<{rotate: number}>`
  position: absolute;
  width: 8px;
  height: 1px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${({rotate}) => rotate + 'deg'});
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 20px;
`;

export const Button = styled(UIButton)`
  margin-left: 10px;
  width: 100%;
  max-width: 175px;
  background: #d3e2ff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border: 1px solid #d3e2ff;
  color: #516ff6;

  ${media.greaterThan('md')`
    width: 200px;
    font-size: 14px;
    border: 1px solid #516FF6;
    background: #516FF6;
    color: #fff;
`};

  &:first-child {
    margin-left: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({theme}) => theme.colors.common.white};
  bottom: -60px;
  left: 0;
  border-top: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  padding: 10px;
`;

export const ResultForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`;

export const ErrorText = styled.p`
  font-size: 10px;
  margin: 0;
  padding: 5px;
  color: ${({theme}) => theme.colors.common.red};
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  flex-basis: 100%;
  position: absolute;
  top: -10px;
  left: 7px;
`;

export const BreadCrumbsWrapper = styled.div`
  margin-bottom: 20px;

  & > :not(:last-child) {
    margin-bottom: 5px;
  }
`;
