import { connect } from 'react-redux';
import SelfIndex from '../../components/self';

const mapStateToProps = (state) => ({
  self: state.self || {},
  tags: state.tags || {},
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const Self = connect(mapStateToProps, mapDispatchToProps)(SelfIndex);

export default Self;
