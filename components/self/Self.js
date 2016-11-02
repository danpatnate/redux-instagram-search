import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Self = ({ id, bio, fullName, username }) => (
  <TableRow>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{bio}</TableRowColumn>
    <TableRowColumn>{fullName}</TableRowColumn>
    <TableRowColumn>{username}</TableRowColumn>
  </TableRow>
);

Self.propTypes = {
  bio: PropTypes.string,
  fullName: PropTypes.string,
  id: PropTypes.string,
  profilePicture: PropTypes.string,
  counts: PropTypes.object,
  username: PropTypes.string,
  webiste: PropTypes.string,
};

export default Self;
