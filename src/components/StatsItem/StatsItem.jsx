import PropTypes from 'prop-types';
import s from 'components/StatsItem/StatsItem.module.css';

export const StatsItem = ({ option, value }) => {
  return (
    <li className={s.item}>
      <span className={s.option}>{option}:</span>
      <span>
        {value}
        {option === 'Positive feedback' ? '%' : ''}
      </span>
    </li>
  );
};

StatsItem.propTypes = {
  option: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
