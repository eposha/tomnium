import * as UI from 'styles/unsubscribe/index';
import FounderBlock from '@/components/unsubscribe/FounderBlock';
import {Media} from 'src/media-styles';
import Link from 'next/link';

const SupportBlock = () => {
  return (
    <UI.SupportWrapper>
      <UI.SupportTextWrapper>
        <UI.SubTitle>Получите нашу поддержку</UI.SubTitle>
        <UI.AccordionTxt>
          Возможно у вас возникли трудности при использовании платформы.
          Напишите в наш центр поддержки, чтобы получить быстрый ответ
        </UI.AccordionTxt>
        <Media greaterThan='xs'>
          <Link href='https://womaninsight.com/support/' passHref>
            <UI.LinkBtn>Центр поддержки</UI.LinkBtn>
          </Link>
        </Media>
      </UI.SupportTextWrapper>
      <FounderBlock
        img='/founder/DinaKhomitskya.jpg'
        name='Дина Хомицкая'
        position='Руководитель центра поддержки Woman Insight'
      />
      <Media at='xs'>
        <Link href={'https://womaninsight.com/support/'} passHref>
          <UI.LinkBtn>Центр поддержки</UI.LinkBtn>
        </Link>
      </Media>
    </UI.SupportWrapper>
  );
};

export default SupportBlock;
