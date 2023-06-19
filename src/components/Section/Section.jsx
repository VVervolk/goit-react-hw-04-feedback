import PropTypes from 'prop-types';
import { Sec } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Sec>
      <h2>{title}</h2>
      {children}
    </Sec>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
