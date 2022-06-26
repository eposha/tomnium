import styled from 'styled-components';

export const FooterToggler = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 28px;
  height: 28px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 0;
  right: -70px;
  cursor: pointer;
`;

export const ArrowWrapper = styled.div<{isRotate:boolean}>(({isRotate}:boolean | any) => ({
  width: '100%',
  height: '100%',
  transform: `rotate(${isRotate ? '0' : '180'}deg)`,
  transition: 'all 0.3s ease-in-out'
}));