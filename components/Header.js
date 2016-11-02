import React from 'react';
import { browserHistory } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';

const navigate = (e, value) => {
  browserHistory.push(value);
};

const Header = () => (
  <Tabs>
    <Tab
      label="Nav Item 1"
      data-route="/home"
      onClick={(e) => navigate(e, '/home')}
    />
    <Tab
      label="Nav Item 2"
      data-route="/navName"
      onClick={(e) => navigate(e, '/you')}
    />
  </Tabs>
);

export default Header;
