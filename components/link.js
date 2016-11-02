import React, { PropTypes } from 'react';
import { Link as ReactLink } from 'react-router';

class Link extends React.Component {
  parseTo(to) {
    const parser = document.createElement('a');
    parser.href = to;
    return parser;
  }
  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }

  render() {
    const { to, children, ...rest } = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (<ReactLink to={toLocation.pathname} {...rest}>{children}</ReactLink>);
    }
    return (<a href={to} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>);
  }
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
