import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import * as InstagramActions from '../actions/tags';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ InstagramActions }),
  dispatch,
});

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <h1 style={{ textAlign: 'center' }}>Title of Page</h1>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-4 content-container">
            { children }
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
