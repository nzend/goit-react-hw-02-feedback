import React from 'react';
import PropTypes from 'prop-types';

import css from './Feedback.module.css';

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  total,
  positiveFeedbackPercentage,
}) => (
  <div>
    <ul>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
