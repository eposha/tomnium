import {Text, Box} from 'styles/common';
import {testAccordion} from '@/components/common/AccordionItem';
import {FAQAccordion} from '@/components/common/PurchaseProducts';
import {TypeFAQ} from '@/types/common';

interface IProps {
  data?: TypeFAQ;
}

export const DesktopFAQ: React.FC<IProps> = () => {
  return (
    <Box mt={'25px'}>
      <Text $title margin={'0 0 15px 0'}>
        FAQ
      </Text>
      <Box mb={'10px'}>
        <FAQAccordion
          data={testAccordion}
          size={'middle'}
          backgroundItem={'whiteGrey'}
        />
      </Box>
    </Box>
  );
};
