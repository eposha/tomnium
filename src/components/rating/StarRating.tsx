import {FC, SyntheticEvent, useState} from 'react';
import * as UI from 'styles/rating';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

interface IStarRating {
  rate: RatingValueType;
  entityId: string;
  estimateEntity?: (id: string, rate: RatingValueType) => void;
}

const StarRating: FC<IStarRating> = ({entityId, rate, estimateEntity}) => {
  const [rating, setRating] = useState<RatingValueType>(rate);
  const [hover, setHover] = useState<RatingValueType | null>(null);

  const ratingGrades: RatingValueType[] = [1, 2, 3, 4, 5];

  const onRatingClickHandler = (
    e: SyntheticEvent,
    id: string,
    grade: RatingValueType,
  ) => {
    e.preventDefault();
    setRating(grade);
    estimateEntity && estimateEntity(id, grade);
  };

  return (
    <UI.RatingWrapper>
      {ratingGrades.map((grade) => {
        return (
          <UI.RatingItem
            key={grade}
            value={grade}
            onClick={(e) =>
              onRatingClickHandler(
                e,
                entityId,
                +e.currentTarget.value as RatingValueType,
              )
            }
            onMouseEnter={() => setHover(grade)}
            onMouseLeave={() => setHover(null)}>
            <UI.RatingStar
              color={grade <= (hover || rating) ? 'lightYellow' : 'greyLight'}
            />
          </UI.RatingItem>
        );
      })}
    </UI.RatingWrapper>
  );
};

export default StarRating;
