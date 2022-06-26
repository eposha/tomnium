import {Controller} from 'react-hook-form';
import {UIPromoInput, FormPromoInput} from 'styles/payments';
import {Button} from 'styles/common';
import {IUseOrderCheck} from '@/graph-hooks/payments';

interface IProps {
  dataOrderCheck: IUseOrderCheck;
}

export const PromoCodeInput: React.FC<IProps> = ({dataOrderCheck}) => {
  const {control, formErrors, onActivePromo} = dataOrderCheck;
  return (
    <FormPromoInput onSubmit={onActivePromo}>
      <Controller
        name={'couponCode'}
        control={control}
        rules={{required: true}}
        render={({field}) => (
          <UIPromoInput
            {...field}
            autoComplete='off'
            placeholder={'Промокод'}
            $isError={Boolean(formErrors?.couponCode)}
          />
        )}
      />
      <Button width={160} $solid type={'submit'}>
        Применить
      </Button>
    </FormPromoInput>
  );
};
