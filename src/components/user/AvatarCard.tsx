import * as UI from 'styles/user/userProfile';
import {FILE_URL} from '@/constants/common';
import {useProfileUpdate} from '@/graph-hooks/user';
import Image from 'next/image';
import {FC} from 'react';
import {Button} from 'styles/common';

interface IAvatarCard {
  photoTxt: string;
  loadTxt: string;
  avatar: any;
}

const AvatarCard: FC<IAvatarCard> = ({photoTxt, loadTxt, avatar}) => {
  const {changeProfile} = useProfileUpdate();

  const path = avatar?.path ? FILE_URL + avatar?.path : '/user/NoAvatar.svg';

  const loadFile = (e: any) => {
    const reader = new FileReader();

    const file = e.target.files[0];

    reader.onloadend = () => {
      changeProfile({avatar: file});
    };

    reader.readAsDataURL(file);
  };
  return (
    <UI.AvatarCard>
      <UI.AvatarCardWrapper>
        <Image
          src={path}
          alt='avatar'
          width={95}
          height={95}
          objectFit='cover'
          priority
        />
      </UI.AvatarCardWrapper>
      <UI.AvatarLoadCard>
        <UI.Subtitle>{photoTxt}</UI.Subtitle>
        <Button $dashed width={160} $label>
          {loadTxt}
          <UI.InputFile
            accept='image/png, image/gif, image/jpeg'
            onChange={(e) => loadFile(e)}
          />
        </Button>
      </UI.AvatarLoadCard>
    </UI.AvatarCard>
  );
};

export default AvatarCard;
