import {FC, useEffect, useState} from 'react';
import {
  addMonths,
  eachMonthOfInterval,
  getMonth,
  getYear,
  startOfMonth,
} from 'date-fns';

import {
  DatePickerHeaderWrapper,
  HeaderDateTitleDate,
  ArrowsWrapper,
  ArrowButton,
  Label,
  ArrowSvg,
} from 'styles/datePicker/appointments';
import {Media} from '../../../../media-styles';
import {LOCALES} from '@/constants/locales';
import {ISelectOption} from '@/types/common';
import {format} from 'date-fns-tz';
import {MonthSelect} from 'styles/select/month';

interface IDatePickerHeader {
  date: Date;
  selectedDate: Date | null;
  minDate: Date;
  maxDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeMonth(month: number): void;
  changeYear(year: number): void;
  resetTime: () => void;
  locale?: string | null;
  timezone?: string;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}
const getOption = (
  date: string | Date,
  locale?: string | null,
  timezone?: string,
) => {
  const normalizedDate = startOfMonth(new Date(date));

  return {
    label: format(normalizedDate, 'LLLL, yyyy', {
      timeZone: timezone,
      locale: LOCALES[locale || ''],
    }),
    value: normalizedDate.toString(),
  };
};

const DatePickerHeader: FC<IDatePickerHeader> = ({
  date,
  decreaseMonth,
  increaseMonth,
  resetTime,
  locale,
  changeMonth,
  changeYear,
  timezone,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  minDate,
  maxDate,
  selectedDate,
}) => {
  const [newDate, setNewDate] = useState<ISelectOption | undefined>();

  useEffect(() => {
    if (!locale || !selectedDate) return;
    const initDate = getOption(selectedDate, locale);
    setNewDate(initDate);
  }, [selectedDate, locale]);

  const months = eachMonthOfInterval({
    start: minDate,
    end: maxDate,
  })?.map((date) => getOption(date, locale, timezone));

  const handleSelectMonthYear = (item: any) => {
    setNewDate(item);
    const newDate = new Date(item.value);
    changeMonth(getMonth(newDate));
    changeYear(getYear(newDate));
  };

  const handleChangeMonth = (flag: 'increase' | 'decrease') => () => {
    const isIncrease = flag === 'increase';
    const delta = isIncrease ? 1 : -1;
    isIncrease ? increaseMonth() : decreaseMonth();
    setNewDate(getOption(startOfMonth(addMonths(date, delta)), locale));
    resetTime();
  };

  return (
    <div>
      <Media at={'xs'}>
        <Label>Выберите дату</Label>
      </Media>
      <Media greaterThan={'xs'}>
        <Label>Выберите дату и время</Label>
      </Media>

      <DatePickerHeaderWrapper>
        {date && (
          <HeaderDateTitleDate>
            <MonthSelect
              options={months}
              value={newDate}
              onChange={handleSelectMonthYear}
              minWidth='130px'
              placeholder='Выбрать...'
            />
          </HeaderDateTitleDate>
        )}

        <ArrowsWrapper>
          {!prevMonthButtonDisabled && (
            <ArrowButton
              disabled={prevMonthButtonDisabled}
              onClick={handleChangeMonth('decrease')}
              $isLeft>
              <ArrowSvg color={'greyDark'} />
            </ArrowButton>
          )}
          {!nextMonthButtonDisabled && (
            <ArrowButton
              disabled={nextMonthButtonDisabled}
              onClick={handleChangeMonth('increase')}>
              <ArrowSvg color={'greyDark'} />
            </ArrowButton>
          )}
        </ArrowsWrapper>
      </DatePickerHeaderWrapper>
    </div>
  );
};

export default DatePickerHeader;
