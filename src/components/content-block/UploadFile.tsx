import {useNode} from '@craftjs/core';

import {Media} from 'src/media-styles';

import * as UI from 'styles/content-block/upload-file';

const UploadFile = () => {
  const {
    props: {fileData, title, description},
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <UI.UploadFile>
      <Media greaterThan={'xs'}>
        <UI.UploadFileIconUI width={45} height={45} />
      </Media>

      <Media at={'xs'}>
        <UI.TitleWrapper>
          <UI.UploadFileIconUI width={30} height={30} />
          {title && <UI.Title>{title}</UI.Title>}
        </UI.TitleWrapper>
        <UI.Description>{description}</UI.Description>
      </Media>
      <UI.MediaWrapper greaterThan={'xs'}>
        <UI.TextWrapper>
          {title && <UI.Title>{title}</UI.Title>}
          {description && <UI.Description>{description}</UI.Description>}
        </UI.TextWrapper>
      </UI.MediaWrapper>
      {fileData && (
        <UI.ButtonStyled
          href={process.env.NEXT_PUBLIC_FILE_URL + fileData.path}
          target='_blank'
          download>
          <UI.Text>Скачать</UI.Text>
        </UI.ButtonStyled>
      )}
    </UI.UploadFile>
  );
};

export default UploadFile;
