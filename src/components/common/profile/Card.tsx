import {FC} from 'react';
import Link from 'next/link';
import {getNonOriginalImage} from '@/helpers/common';
import {useUser} from '@/graph-hooks/user';
import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import * as UI from 'styles/profile/card';
import {useDirectories} from '@/graph-hooks/directories';
import {useGetPlanForProduct} from '@/graph-hooks/plan/useGetPlanForProduct';

interface IProfileCardProps {
  margin?: string;
  isPlain?: boolean;
  width?: string;
}

const ProfileCard: FC<IProfileCardProps> = ({margin, isPlain, width}) => {
  const {user, loading: loadingUser} = useUser();
  const {directories} = useDirectories();
  const {fullName, avatar, Subscription} = user || {};

  const {
    id: planId,
    shortTitle: planShortTitle,
    productId,
  } = Subscription?.Plan || {};

  const {productId: defaultProductId} = useGetPlanForProduct({
    id: directories?.Settings.ourBrands,
    skip: !!productId || loadingUser || !directories?.Settings.ourBrands,
  });

  const userImage = getNonOriginalImage(avatar);

  return (
    <UI.Wrapper margin={margin} $isPlain={isPlain} width={width}>
      <UI.AvatarWrapper>
        <PrimaryAvatar src={userImage} title={fullName || ''} size={58} />
      </UI.AvatarWrapper>
      <UI.Name>{fullName || 'Гость'}</UI.Name>
      <UI.Level $statusPrimary>
        {user ? planShortTitle ?? 'Гостевой доступ' : 'Нет доступа'}
      </UI.Level>
      {(productId || defaultProductId) && (
        <Link
          href={`/plans/${planId ?? directories?.Settings?.ourBrands}/product/${
            productId ?? defaultProductId
          }/prices`}
          passHref>
          <UI.StyledLink>Повысить</UI.StyledLink>
        </Link>
      )}{' '}
    </UI.Wrapper>
  );
};

export default ProfileCard;
