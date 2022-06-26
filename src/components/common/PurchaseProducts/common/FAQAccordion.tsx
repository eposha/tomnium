import {AccordionItem} from '@/components/common/AccordionItem';
import {TypeFAQ} from '@/types/common';
import {TColors} from 'styles/_variables';

interface IProps {
  data: TypeFAQ;
  size?: 'small' | 'middle' | 'large';
  backgroundItem?: TColors;
}

export const FAQAccordion: React.FC<IProps> = ({
  data,
  size,
  backgroundItem,
}) => {
  return (
    <>
      {data?.map((item, index) => (
        <AccordionItem
          background={backgroundItem}
          size={size}
          item={item}
          key={`${item.title}_${index}`}
        />
      ))}
    </>
  );
};
