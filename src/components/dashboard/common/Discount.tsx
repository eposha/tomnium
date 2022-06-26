import Link from 'next/link';
import * as UI from 'styles/dashboard/discount';

const Discount = ({salesCount}: {salesCount?: number}) => {
  return (
    <UI.DiscountWrapper>
      <UI.DiscountText fz={12}>Акции ({salesCount})</UI.DiscountText>
      <UI.DiscountText fz={14}>Посмотри все акции</UI.DiscountText>
      <Link href={'/user/sales'} passHref>
        <UI.DiscountButton>Смотреть все</UI.DiscountButton>
      </Link>
    </UI.DiscountWrapper>
  );
};

export default Discount;
