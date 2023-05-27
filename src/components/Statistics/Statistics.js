// import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
    <span>Total: {total()}</span>
    <span>Positive feedback: {positiveFeedbackPercentage()}%</span>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.func.isRequired,

  positiveFeedbackPercentage: PropTypes.func.isRequired,
};
