import {FC} from 'react';
import {Upload, UploadInput} from 'styles/diagnostics/components';

interface IUploadItem {
  children?: any;
  acceptFile: string;
}

const UploadItem: FC<IUploadItem> = ({acceptFile, children}) => {
  return (
    <Upload>
      <UploadInput accept={acceptFile} />
      {children}
    </Upload>
  );
};

export default UploadItem;
