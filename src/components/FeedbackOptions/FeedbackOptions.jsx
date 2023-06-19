import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => {
        let uuid = crypto.randomUUID().slice(0, 5);
        return (
          <li key={uuid}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
