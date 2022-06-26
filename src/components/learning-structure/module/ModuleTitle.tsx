import Link from 'next/link';
import {IModule} from '@/types/module';
import {Text} from 'styles/common';
import {CardLableIcon} from '../CardLabelIcon';
import * as UI from 'styles/learningStructure/module-title';

interface IModuleTitleProps {
  module: IModule;
  moduleIndex: number;
  threadId?: string;
  courseId?: string;
  isPreviewMode?: boolean;
}

const ModuleTitle: React.FC<IModuleTitleProps> = ({
  module,
  // moduleIndex,
  threadId,
  courseId,
  isPreviewMode,
}) => {
  const {isFree, id, title, isAvailable, UserModuleProgress} = module;

  return (
    <UI.Wrapper>
      <UI.NumberLabel>
        <CardLableIcon
          isAvailable={isAvailable}
          progress={UserModuleProgress?.progress}
        />
      </UI.NumberLabel>

      <Text $title isMed jcb>
        {isAvailable ? (
          <Link
            href={`/courses/${courseId}/threads/${threadId}/modules/${id}${
              isPreviewMode ? '?show=own' : ''
            }`}>
            <a onClick={(e) => e.stopPropagation()}>{title}</a>
          </Link>
        ) : (
          title
        )}
        {isFree && <UI.TitleLabel>Free</UI.TitleLabel>}
      </Text>
    </UI.Wrapper>
  );
};

export default ModuleTitle;
