import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const InnerImage = styled.div<{size?: number}>`
  background: ${({theme}) => theme.colors.common.blueberryLight};
  color: ${({theme}) => theme.colors.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-transform: uppercase;
  width: ${({size}) => (size ? `${size}px` : '40px')};
  height: ${({size}) => (size ? `${size}px` : '40px')};
  overflow: hidden;
`;

interface IProps {
  src?: string | null;
  title: string;
  size?: number;
}

export const PrimaryAvatar: React.FC<IProps> = ({src, title, size}) => {
  return (
    <InnerImage size={size}>
      {src ? (
        <Image
          src={src}
          width={size}
          height={size}
          objectFit={'cover'}
          alt={'avatar'}
        />
      ) : (
        title.trim().substr(0, 1)
      )}
    </InnerImage>
  );
};
