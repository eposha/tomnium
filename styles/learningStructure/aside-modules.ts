import styled, {css} from 'styled-components';

export const ModulesWrapper = styled.div``

export const ModuleItem = styled.div`
  width: 100%;
  margin-bottom: 4px;
`

export const ModuleHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: 'Gilroy-Regular', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #131415;
  padding: 5px 0;
`

export const ModuleItemCss = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`

export const ModuleItemLink = styled.a`
  ${ModuleItemCss};
`

export const ModuleItemTxt = styled.div`
  ${ModuleItemCss};
`


export const IconWrapper = styled.div<{$isActive: boolean}>`
 width: 8px;
 height: 5px;
 transform: rotate(${({$isActive}) => $isActive ? '180deg' : '0deg'});
 transition: all .2s ease-in-out;
 svg {
  display: block;
 }
`;

export const LessonsWrapper = styled.div<{$isActive: boolean}>`
  padding: 7px 0 0 10px;
  max-height: ${({ $isActive }) => $isActive ? 'auto' : '0'};
  overflow: hidden;
`

export const LessonItem = styled.div`
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 7px;

    &:last-child {
      margin: 0;
    }
`

export const LessonItemCss = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
`

export const AsideTitle = styled.div<{mb?: number, border?: string, color?: string}>`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  font-family: 'Gilroy-Medium';
  color: ${({color}) => color || '#131415'};
  padding-bottom: 11px;
  margin-bottom: ${({ mb }) => mb ? mb : 0}px;
  border-bottom: ${({border}) => border ? `1px solid ${border}` : 'unset'};
`

export const AsideLink = styled.a`
  display: block;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  font-family: 'Gilroy-Medium';
  color: #516FF6;
  margin-bottom: 5px;
  cursor: pointer;
`

export const LessonLink = styled.a`
  ${LessonItemCss}
`

export const LessonItemTxt = styled.a`
  ${LessonItemCss}
`