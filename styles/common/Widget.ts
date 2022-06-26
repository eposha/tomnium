import styled, {css, StyledProps} from 'styled-components';

export type TColor = 'primary' | 'secondary' | 'tertiary';

const Content = css`
  color: #fff;
  font-weight: 700;
  background: rgba(30, 107, 255, 0.5);
  padding: 4px 10px;
`;

const Solid = css`
  background: transparent;
  border: 1px solid #d3e2ff;
`;

const Status = css`
  border-radius: 20px;
`;

const StatusPrimary = css`
  ${Status};
  border: 1px solid #516ff6;
`;

const StatusSecondary = css`
  ${Status};
  background: #fff;
  border: 1px solid #d3e2ff;
`;

const getBackground = ({
  theme,
  background,
}: StyledProps<{background?: 'primary' | 'secondary' | 'tertiary'}>) => {
  switch (background) {
    case 'primary':
      return theme.colors.common.blueberryLight;
    case 'secondary':
      return theme.colors.common.jordyBlue;
    case 'tertiary':
      return theme.colors.common.jordyBlue;
    default:
      return theme.colors.common.blueberryLight;
  }
};

const Widget = styled.div<{
  height?: string;
  width?: string;
  $content?: boolean;
  $solid?: boolean;
  $status?: boolean;
  $statusPrimary?: boolean;
  $statusSecondary?: boolean;
  $secondary?: boolean;
  background?: TColor;
  fontSize?: string;
  ml?: number;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 5px 10px;
  background: ${getBackground};
  border-radius: 5px;
  color: ${({$secondary}) => ($secondary ? '#fff' : '#516FF6')};
  border: 1px solid transparent;
  margin-left: ${({ml}) => ml ? `${ml}px` : '0'};

  ${({$content}) => $content && Content};
  ${({$solid}) => $solid && Solid};
  ${({$status}) => $status && Status};
  ${({$statusPrimary}) => $statusPrimary && StatusPrimary};
  ${({$statusSecondary}) => $statusSecondary && StatusSecondary};

  ${({height}) => height && `height: ${height}`};
  ${({width}) => width && `width: ${width}`};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  text-align: ${({textAlign}) => textAlign ?? 'left'};
`;

export default Widget;
