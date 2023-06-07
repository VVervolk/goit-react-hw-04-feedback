import { Component } from 'react';
import PropTypes from 'prop-types';
import { Sec } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;
    return (
      <Sec>
        <h2>{title}</h2>
        {children}
      </Sec>
    );
  }
}
