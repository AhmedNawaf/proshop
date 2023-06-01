import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
  value: number;
  text: string;
}

// TODO: Refactor the logic below to be more readable

const outOfFive = new Array(5);

function Rating({ value, text }: Props) {
  return (
    <div className='rating'>
      {outOfFive.fill(0).map((_, index) => (
        <span key={index}>
          {value >= index + 1 ? (
            <FaStar />
          ) : value >= index + 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}

      <span className='rating-text'>{text && text}</span>
    </div>
  );
}

export default Rating;
