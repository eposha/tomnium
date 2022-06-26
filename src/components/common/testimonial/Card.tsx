import React, {FC} from 'react';
import * as UI from 'styles/testimonials/card';
import {IFeedBack} from '@/types/common';
import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {getNonOriginalImage} from '@/helpers/common';

interface ICardProps {
  item: IFeedBack;
}

export const Card: FC<ICardProps> = ({item}) => {
  const {avatar, text, fullName, regalia} = item;
  return (
    <UI.Wrapper>
      <UI.Inner>
        <UI.ImageBackground>
          <UI.StyledImageWrapper>
            <PrimaryAvatar
              size={60}
              src={getNonOriginalImage(avatar)}
              title={fullName || ''}
            />
          </UI.StyledImageWrapper>
        </UI.ImageBackground>
        <UI.Header>
          <UI.Title>{fullName}</UI.Title>
          <UI.Role>{regalia}</UI.Role>
        </UI.Header>
        <UI.Content>
          <UI.ContentText>{text}</UI.ContentText>
        </UI.Content>
      </UI.Inner>
    </UI.Wrapper>
  );
};
